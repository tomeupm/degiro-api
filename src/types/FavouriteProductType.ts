export type FavouriteProductType = {
  id: number
  name?: string
  isDefault: boolean
  productIds: number[]
  default: boolean
}