export interface CreateReviewDto {
  product_id: number;
  username: string;
  rating: number;
  comment: string;
}