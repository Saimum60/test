import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    id:1,
    name:'Product 1',
    price:100,
    categery:'Gadget',
    image:'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6384511/jbareham_160418_0931_0086_FINAL_NO_BUFFER_5MB_02.0.jpg?quality=90&strip=all&crop=0,4.116413214473,100,91.767173571054'

},
{
    id:2,
    name:'Product 2',
    price:100,
    categery:'Gadget',
    image:'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6384511/jbareham_160418_0931_0086_FINAL_NO_BUFFER_5MB_02.0.jpg?quality=90&strip=all&crop=0,4.116413214473,100,91.767173571054'

},{
    id:3,
    name:'Product 3',
    price:100,
    categery:'Gadget',
    image:'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6384511/jbareham_160418_0931_0086_FINAL_NO_BUFFER_5MB_02.0.jpg?quality=90&strip=all&crop=0,4.116413214473,100,91.767173571054'

}]

const productSlice=createSlice({
    name:'Products',
    initialState,
    reducers:{
        addProduct: (state, action)=>{
            state.push({
                id:state.length>0 ? state[state.length-1].id: 1,
                ...action.payload
            })

        }
    }
})
export const {addProduct}= productSlice.actions

export default productSlice.reducer