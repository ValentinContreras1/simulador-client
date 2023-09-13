import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue } from "firebase/database"

export const useLagunasStore = create((set) => {
  return {
    lagunas: [],
    fetchLagunas: async () => {
      const lagunasRef = ref(db, "Lagunas/")

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

          set({ lagunas: lagunasArray })
        }
      })
    },
  }
})
