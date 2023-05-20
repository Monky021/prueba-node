import { NextFunction } from 'express';
export interface HttpResponse {
  statusCode: number
  body: any,
  success: boolean,
  message: string,
  error?: any
}

export interface HttpRequest {
  body?: any,
  params?: any,
  query?: any,
  user?: any
}
export interface HttpNext {
  next: NextFunction
}
