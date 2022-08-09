const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

async function getData() {

  const config = {
    headers :{
      Accept : 'application/json'
    },
  }
  
  const res = await fetch('https://type.fit/api/quotes', config)
  const data = await res.json()

  const rndNum = Math.floor(Math.random() * 1643)
  const authorName = data[rndNum].author
  



  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />'
  title.innerHTML = 'Inspirational Quotes'
  excerpt.innerHTML = data[rndNum].text
  profile_img.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQMyqAi1gpIOnCwNYAGF2MHs2SoUwrbNTlAeDyFSqAsgYyhQF3MxHnhOOSHkxhVck1D0&usqp=CAU" alt="" />'
  name.innerHTML = authorName
  date.innerHTML = new Date().toLocaleString().replaceAll("/", "·")

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

