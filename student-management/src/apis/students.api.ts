import { Students } from 'types/students.type'
import http from 'utils/http'

export const getStudents = async (page: number | string, limit: number | string) => {
  const response = await http.get<Students>(`/students`, {
    params: {
      _page: page,
      _limit: limit
    }
  })

  return response
}
