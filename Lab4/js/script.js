const switchers = [...document.querySelectorAll('.switcher')]
let name = document.getElementById('signup-name');
let email = document.getElementById('signup-email');
let pass1 = document.getElementById('signup-password');
let pass2 = document.getElementById('signup-password-confirm');
let logpass = document.getElementById('login-password');
let logmail = document.getElementById('login-email');
let fname = document.getElementById('forgot-name');
let fmail = document.getElementById('forgot-email');
let fpass1 = document.getElementById('forgot-password');
let fpass2 = document.getElementById('forgot-new-password');

let arr = [];
let o=0;

function sub(){
		if(pass1.value==pass2.value){
		arr.push({     
  			n: name.value,  
  			e: email.value,
  			p1: pass1.value,
  			p2: pass2.value,
  			b:0,
  			time:0      
		})
		setTimeout(
        	function(){
        		arr[arr.length-1].time=1;
        	}, 20000)
    	console.log(arr);
        
		name.value='';
		email.value='';
		pass1.value='';
		pass2.value='';
		} 
		else {
			window.alert('Пароли не совпадают!');
		}	
	}


function login(){
	for(let k in arr)
        {
            if(logmail.value==arr[k].e && arr[k].b ==0){
            	if(logpass.value==arr[k].p1){
					logmail.value='';
					logpass.value='';
					window.alert('Вы вошли в систему');
					if(arr[k].time==1){
						window.alert('Необходимо сменить пароль');
						arr[k].b=1;
					}
            	}
            	else{
            		o++;
            		if(o==3){
            			arr[k].b=1;
            			window.alert('Учетная запись заблокирована');
            		}
            	window.alert('ошибка при вводе данных');
            }
            }
            else{
            	window.alert('ошибка при вводе данных');
            }
        }
        
}
function unlock(){
	for(let k in arr){
		if(fmail.value==arr[k].e && arr[k].b ==0){
			if(fname.value==arr[k].n){
            	if(fpass1.value==arr[k].p1){
            		if(fpass1.value!=fpass2.value){
            			arr[k].p1=fpass2.value;
            			arr[k].p2=fpass2.value;
            			arr[k].time=0;
            			fname.value='';
						fmail.value='';
						fpass1.value='';
						fpass2.value='';
						
            			window.alert('Вы успешно сменили пароль')
            			setTimeout(
        					function(){
        						arr[k].time=1;
        							}, 20000)
            			
            		}
            		else{
            		window.alert('Новый пароль не может совпадать с предыдущим')
            	}
            	}
            	
            }
        }
        if(fmail.value==arr[k].e && arr[k].b ==1){
			if(fname.value==arr[k].n){
            		
            			arr[k].p1=fpass2.value;
            			arr[k].p2=fpass2.value;
            			arr[k].b =0;
            			arr[k].time=0;
            			fname.value='';
						fmail.value='';
						fpass1.value='';
						fpass2.value='';
            			window.alert('Вы успешно сменили пароль')
            			setTimeout(
        					function(){
        						arr[k].time=1;
        							}, 20000)
            		
            	}
            	
            }
        
	}
}

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
