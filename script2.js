const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const results2 = document.querySelector('#results2')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = "Please Enter Valid height"
    }
     else if(weight === '' || weight < 0 || isNaN(height) ){
        results.innerHTML = "Please Enter Valid weight"
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`
    }
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    if(bmi <18.6){
       results2.innerHTML = "Under Weight"
    }else if(bmi>18.6 && bmi<24.9){
        results2.innerHTML = "Normal Range"
    }else{
        results2.innerHTML = "Overweight"
    }
})