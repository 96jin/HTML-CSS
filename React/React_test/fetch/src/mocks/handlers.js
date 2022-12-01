import {rest} from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/api/users',async(req,res,ctx)=>{
    const pageIndex = req.url.searchParams.get('page')
    return res(
      ctx.json([
        {
          id: `1 ${pageIndex}`,
          name: `Jimmy 1-${pageIndex}`
        },
        {
          id: `2 ${pageIndex}`,
          name: `Jimmy 2-${pageIndex}`
        },
        {
          id: `3 ${pageIndex}`,
          name: `Jimmy 3-${pageIndex}`
        },
        {
          id: `4 ${pageIndex}`,
          name: `Jimmy 4-${pageIndex}`
        },
        {
          id: `5 ${pageIndex}`,
          name: `Jimmy 5-${pageIndex}`
        },
        {
          id: `6 ${pageIndex}`,
          name: `Jimmy 6-${pageIndex}`
        },
        {
          id: `7 ${pageIndex}`,
          name: `Jimmy 7-${pageIndex}`
        },
        {
          id: `8 ${pageIndex}`,
          name: `Jimmy 8-${pageIndex}`
        },
        {
          id: `9 ${pageIndex}`,
          name: `Jimmy 9-${pageIndex}`
        },]
      )
    )
    // return res(ctx.status(400))
  }),
  rest.get('http://localhost:3000/api/user/:id',async(req,res,ctx)=>{
    const {id} = req.params
    return res(
      ctx.json({
        name: `Jimmy ${id}`
      })
    )
    // return res(ctx.status(400))
  }),
  rest.get('http://localhost:3000/api/user-name',async(req,res,ctx)=>{
    const id= req.url.searchParams.get("id")
    
    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others",
      })
    )
  }),
  rest.put('http://localhost:3000/counter/increment',async(req,res,ctx)=>{
    const {value} = req.body
    return res(
      ctx.json({
        value : value+2
      })
    )
  }),
  rest.get('/login',async(req,res,ctx)=>{
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
  // 서버의 요청을 인터셉트 해서 조정할 수 있다.
  rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async(req,res,ctx)=>{
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()

    return res(
      ctx.status(403),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `Data not found`,
      }),
      // ctx.json({
      //   "data": {
      //     "people" :
      //     [
      //       ...originalResponseData.data.people,
      //       {
      //         "name": id,
      //         "age": 135
      //       },
            
      //     ]
      //   }
      // })
    )
  })
]