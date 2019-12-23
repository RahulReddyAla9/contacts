const {load,calling}=require('./javas.js')
const {build,addPerson}=require('./UI_JS')

beforeAll(()=>{
        addPerson("Rahul","Reddy","rahul@reddy","https://randomuser.me/api/portaits/men/1.jpg")
})

test('Testing addPerson',function(){
    
    expect(document.getElementsByClassName('card').length).toEqual(1)
})
test('Testing Name Criteria',function(){
    expect(document.getElementById('first_last_name').innerHTML).toEqual("Rahul Reddy")
})
test('Testing Email Criteria',function(){
    expect(document.getElementById('idemail').innerHTML).toEqual("rahul@reddy")
})
test('Testing Image Criteria',function(){
    expect(document.getElementsByClassName('image')).toBeTruthy()
})
