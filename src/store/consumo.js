import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue, set } from "firebase/database"
import { useLagunasStore } from "./lagunas"

export const useConsumoStore = create((put, get) => {
  return {
    consumo: 0,
    actualizarConsumo: async () => {
      const lagunas = useLagunasStore.getState().lagunas

      const incrementoConsumoPorAireador = 0.3

      const consumoTotal = lagunas.reduce((total, laguna) => {
        const aireadores = laguna.aireadores

        const consumoAireadores = aireadores.reduce((individual, aireador) => {
          const frecuencia = aireador.frecuencia
          const incremento = frecuencia * incrementoConsumoPorAireador
          return individual + incremento
        }, 0)

        return total + consumoAireadores
      }, 0)

      const consumoLimitado = Math.min(consumoTotal, 100)

      const consumoRef = ref(db, "Consumo")
      set(consumoRef, consumoLimitado)

      put({ consumo: consumoLimitado })
    },

    fetchConsumo: () => {
      const consumoRef = ref(db, "Consumo")
      onValue(consumoRef, (snapshot) => {
        const data = snapshot.val()
        const consumoLimitado = Math.min(data, 100)
        put({ consumo: consumoLimitado })
      })
    },
  }
})
