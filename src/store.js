/**
 * Created by Administrator on 2016/12/9.
 */


export default{
    fetch(){
//		return JSON.parse(window.localStorage.getItem(KEY) || '[]')
        return JSON.parse(window.localStorage.KEY || '[]')
    },
    save(items){
//		window.localStorage.setItem(KEY,JSON.stringify(items))
        window.localStorage.KEY = JSON.stringify(items)

    }
}