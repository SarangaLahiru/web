var curr=document.querySelector('.curr')
var p1=document.querySelector('.a1')
var p2=document.querySelector('.a2')
var p3=document.querySelector('.a3')
var p4=document.querySelector('.a4')
var img=document.querySelectorAll('.imgs')



function one(){
    var curr=document.querySelector('.curr')
    var p1=document.querySelector('.a1')
    var p2=document.querySelector('.a2')
    var p3=document.querySelector('.a3')
    var p4=document.querySelector('.a4')

          if(curr.previousElementSibling){

            if(curr.classList.value=='a1 imgs p1 curr'){

              
              curr.classList.remove('curr')
              p1.classList.remove('p1')
              p2.classList.remove('p2')
              p3.classList.remove('p3')
              p4.classList.remove('p4')

              p1.classList.add('p4')
              p2.classList.add('p1')
              p3.classList.add('p2')
              p4.classList.add('p3')
              curr.previousElementSibling.classList.add('curr')

            }
             else if(curr.classList.value=='a2 imgs p1 curr'){

              
              curr.classList.remove('curr')
              p1.classList.remove('p4')
              p2.classList.remove('p1')
              p3.classList.remove('p2')
              p4.classList.remove('p3')

              p1.classList.add('p3')
              p2.classList.add('p4')
              p3.classList.add('p1')
              p4.classList.add('p2')
              curr.previousElementSibling.classList.add('curr')

            }
            else if(curr.classList.value=='a3 imgs p1 curr'){

              
              curr.classList.remove('curr')
              p1.classList.remove('p3')
              p2.classList.remove('p4')
              p3.classList.remove('p1')
              p4.classList.remove('p2')

              p1.classList.add('p2')
              p2.classList.add('p3')
              p3.classList.add('p4')
              p4.classList.add('p1')
              curr.previousElementSibling.classList.add('curr')

            }
                       
 }
   else{

              
              curr.classList.remove('curr')
              p1.classList.remove('p2')
              p2.classList.remove('p3')
              p3.classList.remove('p4')
              p4.classList.remove('p1')

              p1.classList.add('p1')
              p2.classList.add('p2')
              p3.classList.add('p3')
              p4.classList.add('p4')
              img[3].classList.add('curr')



            }
}

var time =setInterval(one,5000)


var cup=document.querySelector('.cup')

cup.addEventListener('click',function(){
  cup.classList.add('cup1')
  cup.classList.add('ini')
  cup.classList.remove('cup2')
})