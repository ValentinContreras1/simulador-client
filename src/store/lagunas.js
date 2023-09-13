import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue, push, set } from "firebase/database"
import { v4 as uuid } from "uuid"

const lagunasRef = ref(db, "Lagunas/")

export const useLagunasStore = create((put, get) => {
  return {
    lagunas: [],
    fetchLagunas: async () => {
      onValue(lagunasRef, (snapshot) => {
        const data = snapshot.val()

        if (data) {
          const lagunasArray = Object.entries(data).map(
            ([lagunaId, lagunaData]) => {
              const aireadoresArray = Object.entries(lagunaData.Aireadores).map(
                ([aireadorId, aireadorData]) => ({
                  id: aireadorId,
                  ...aireadorData,
                })
              )

              return {
                id: lagunaId,
                aireadores: aireadoresArray,
                od: lagunaData.od,
                orp: lagunaData.orp,
              }
            }
          )

          put({ lagunas: lagunasArray })
        }
      })
    },
    createEmptyLaguna: async () => {
      const id = uuid()

      const emptyLaguna = {
        id,
        od: 0,
        orp: 0,
        Aireadores: {
          frecuencia: 'none'
        },
      }

      push(lagunasRef, emptyLaguna)
    },
  }
})
