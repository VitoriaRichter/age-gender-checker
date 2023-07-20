function check() {
    var result = document.getElementById('result')
    
    var date = new Date()
    var currentYear = date.getFullYear()
    var birthYear = document.getElementById('birthyear')
    var age = currentYear - Number(birthYear.value)

    var img = document.createElement('img')
    img.setAttribute('id','photo')

    var genderRadio = document.getElementsByName('gender')
    var gender = ''
    if (genderRadio[0].checked) {
        gender = 'Male'
    } else if  (genderRadio[1].checked) {
        gender = 'Female'
    }

    var message = `We have detected a ${age} year old ${gender}.`
    result.style.textAlign = 'center'
    result.innerHTML = message
    //Female Photo
    if (age <= 10 && gender == 'Female'){
        img.setAttribute('src','images/girl.png')
    } else if (age > 10 && age <= 20 && gender == 'Female'){
        img.setAttribute('src','images/youngwoman.png')
    } else if (age > 20 && age <= 60 && gender == 'Female'){
        img.setAttribute('src','images/woman.png')
    } else if (age > 60 && gender == 'Female'){
        img.setAttribute('src','images/oldwoman.png')
    } 
    //Male Photo
    if (age <= 10 && gender == 'Male'){
        img.setAttribute('src','images/boy.png')
    } else if (age > 10 && age <= 20 && gender == 'Male'){
        img.setAttribute('src','images/youngman.png')
    } else if (age > 20 && age <= 60 && gender == 'Male'){
        img.setAttribute('src','images/man.png')
    } else if (age > 60 && gender == 'Male'){
        img.setAttribute('src','images/oldman.png')
    } 
    result.appendChild(img)   
    }
