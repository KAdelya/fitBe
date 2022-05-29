export interface IUser {
    token: string | null,
    id: string | null,
    userEmail: string | null,
    userName: string | null,
    userSurname: string | null,
    avatar: string | null,
    weight: any,
    spendingHours: number
}


// info: {
//     avatar: newAvatar,
//     spendingHours: newSpendingHours,
//     waterCount: newWaterCount,
// },
// weight: {
//     start: newWeight,
//     current: newWeight,
//     desired: newDesiredWeight
// },
// calories: newCalories