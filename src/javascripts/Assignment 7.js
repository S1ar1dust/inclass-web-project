
/* Function to print the inputed text in a way that the text can wrap */
function speak(string, columnLength, bubbleHeight) {
    if (string.length > 28) {
        columnLength += 14
        let parsed = string.substr(0, 28)
        string = string.replace(parsed, "")
        speak(string, columnLength, bubbleHeight)
        return ctx.fillText(parsed, 470, (760-bubbleHeight)+columnLength)
    } else {
        columnLength += 14
        return ctx.fillText(string, 470, (760-bubbleHeight)+columnLength)
    }
}

/* This function controls the visuals of the webpage*/
function render() {
    let c = document.querySelector('canvas')
    if (c.getContext) {
        let = ctx = c.getContext('2d')
        ctx.clearRect(0, 0, 1500, 944)


        /* Background */
        /* Table */
        ctx.fillStyle = "black"
        ctx.fillRect(0, 594, 1500, 30)
        ctx.fillStyle = "rgb(196, 130, 31)"
        ctx.fillRect(0, 624, 1500, 320)

        let decoration = 0
        for (let i = 0; i < 10; i++) {
            ctx.fillStyle = "rgb(125, 75, 1)"
            ctx.fillRect(0+decoration, 624, 25, 320)

            decoration = decoration + 164
        }

        ctx.fillStyle = "rgb(180, 180, 180)"
        ctx.fillRect(500, 514, 10, 80)
        ctx.fillRect(550, 564, 10, 30)

        /* Cabinets */
        decoration = 0
        for (let i = 0; i < 3; i++) {
            ctx.fillStyle = "rgb(77, 47, 2)"
            ctx.fillRect(0+decoration, 644, 155, 270)
            ctx.fillStyle = "rgb(222, 157, 60)"
            ctx.fillRect(20+decoration, 664, 115, 230)
            ctx.fillStyle = "rgb(158, 158, 158)"
            ctx.fillRect(110+decoration, 754, 8, 50)

            ctx.fillStyle = "rgb(77, 47, 2)"
            ctx.fillRect(155+decoration, 644, 155, 270)
            ctx.fillStyle = "rgb(222, 157, 60)"
            ctx.fillRect(175+decoration, 664, 115, 230)
            ctx.fillStyle = "rgb(158, 158, 158)"
            ctx.fillRect(192+decoration, 754, 8, 50)

            decoration = decoration + 595
        }

        /* Cupboards */
        decoration = 0
        for (let i = 0; i < 2; i++) {
            ctx.fillStyle = "rgb(77, 47, 2)"
            ctx.fillRect(0 + decoration, 0, 215, 350)
            ctx.fillStyle = "rgb(222, 157, 60)"
            ctx.fillRect(20 + decoration, 20, 175, 310)
            ctx.fillStyle = "rgb(158, 158, 158)"
            ctx.fillRect(155 + decoration, 140, 8, 70)

            ctx.fillStyle = "rgb(77, 47, 2)"
            ctx.fillRect(215 + decoration, 0, 215, 350)
            ctx.fillStyle = "rgb(222, 157, 60)"
            ctx.fillRect(235 + decoration, 20, 175, 310)
            ctx.fillStyle = "rgb(158, 158, 158)"
            ctx.fillRect(267 + decoration, 140, 8, 70)

            decoration = decoration + 430+300
        }

        ctx.fillStyle = "rgb(77, 47, 2)"
        ctx.fillRect(430, 0, 150, 150)
        ctx.fillStyle = "rgb(222, 157, 60)"
        ctx.fillRect(450, 20, 110, 110)
        ctx.fillStyle = "rgb(158, 158, 158)"
        ctx.fillRect(530, 56, 8, 35)

        ctx.fillStyle = "rgb(77, 47, 2)"
        ctx.fillRect(580, 0, 150, 150)
        ctx.fillStyle = "rgb(222, 157, 60)"
        ctx.fillRect(600, 20, 110, 110)
        ctx.fillStyle = "rgb(158, 158, 158)"
        ctx.fillRect(622, 56, 8, 35)

        ctx.fillStyle = "rgb(180, 180, 180)"
        ctx.fillRect(430, 150, 300, 75)

        /* Window */
        ctx.fillStyle = "white"
        ctx.fillRect(1200, 0, 300, 450)

        ctx.fillStyle = "rgb(94, 201, 219)"
        ctx.fillRect(1200+30, 30, 160, 180)
        ctx.fillRect(1420, 30, 160, 180)
        ctx.fillRect(1230, 240, 160, 180)
        ctx.fillRect(1420, 240, 160, 180)

        /* Floor */
        ctx.fillStyle = "black"
        ctx.fillRect(0, 934, 1500, 10)
        
        
        /* Yarn Ball */
        ctx.fillStyle = "pink"
        ctx.beginPath()
        ctx.arc(document.getElementById('x').value, 918, 15, 0, 2 * Math.PI)
        ctx.fill()


        /* CAT 750, 844*/
        
        const catHeight = 844

        /* Head */
        ctx.fillStyle = document.getElementById('c').value
        
        ctx.beginPath()
        ctx.arc(document.getElementById('cat').value, catHeight, 32, 0, 2*Math.PI)
        ctx.fill()
        ctx.moveTo(parseInt(document.getElementById('cat').value)+10, catHeight-30)
        ctx.lineTo(parseInt(document.getElementById('cat').value)+32, catHeight-50)
        ctx.lineTo(parseInt(document.getElementById('cat').value)+32, catHeight)
        ctx.moveTo(parseInt(document.getElementById('cat').value)-10, catHeight-30)
        ctx.lineTo(parseInt(document.getElementById('cat').value)-32, catHeight-50)
        ctx.lineTo(parseInt(document.getElementById('cat').value)-32, catHeight)
        ctx.fill()

        /* Face */
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(parseInt(document.getElementById('cat').value)-12, catHeight-10, 9, 0, 2*Math.PI)
        ctx.arc(parseInt(document.getElementById('cat').value)+12, catHeight-10, 9, 0, 2*Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(parseInt(document.getElementById('cat').value)-10, catHeight+8)
        ctx.quadraticCurveTo(parseInt(document.getElementById('cat').value)-5, catHeight+15, parseInt(document.getElementById('cat').value), catHeight+8)
        ctx.quadraticCurveTo(parseInt(document.getElementById('cat').value)+5, catHeight+15, parseInt(document.getElementById('cat').value)+10, catHeight+8)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(parseInt(document.getElementById('cat').value), catHeight+3)
        ctx.lineTo(parseInt(document.getElementById('cat').value)-4, catHeight-3)
        ctx.lineTo(parseInt(document.getElementById('cat').value)+4, catHeight-3)
        ctx.fill()

        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(parseInt(document.getElementById('cat').value)-11, catHeight-12, 4, 0, 2*Math.PI)
        ctx.arc(parseInt(document.getElementById('cat').value)+11, catHeight-12, 4, 0, 2*Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(parseInt(document.getElementById('cat').value)-16, catHeight-7, 1, 0, 2*Math.PI)
        ctx.arc(parseInt(document.getElementById('cat').value)+16, catHeight-7, 1, 0, 2*Math.PI)
        ctx.fill()

        /* Body */
        ctx.fillStyle = document.getElementById('c').value
        ctx.beginPath()
        ctx.arc(parseInt(document.getElementById('cat').value)+20, catHeight+34, 24, 0.5*Math.PI, 1.5*Math.PI)
        ctx.fillRect(parseInt(document.getElementById('cat').value)+20, catHeight+10, 80, 504-456)
        ctx.arc(parseInt(document.getElementById('cat').value)+100, catHeight+34, 24, 1.5*Math.PI, 0.5*Math.PI)
        ctx.fill()

        /* Tail */
        ctx.fillStyle = document.getElementById('c').value
        ctx.beginPath()
        ctx.moveTo(parseInt(document.getElementById('cat').value)+100, catHeight+40)
        ctx.lineTo(parseInt(document.getElementById('cat').value)+100,catHeight+25)
        ctx.bezierCurveTo(parseInt(document.getElementById('cat').value)+110, catHeight, parseInt(document.getElementById('cat').value)+172, catHeight-60, parseInt(document.getElementById('cat').value)+200, catHeight+5)
        ctx.bezierCurveTo(parseInt(document.getElementById('cat').value)+210, catHeight+20, parseInt(document.getElementById('cat').value)+220, catHeight+15, parseInt(document.getElementById('cat').value)+234, catHeight)
        ctx.bezierCurveTo(parseInt(document.getElementById('cat').value)+250, catHeight-20, parseInt(document.getElementById('cat').value)+260, catHeight-10, parseInt(document.getElementById('cat').value)+230, catHeight+18)
        ctx.bezierCurveTo(parseInt(document.getElementById('cat').value)+216, catHeight+32, parseInt(document.getElementById('cat').value)+200, catHeight+33, parseInt(document.getElementById('cat').value)+194, catHeight+20)
        ctx.bezierCurveTo(parseInt(document.getElementById('cat').value)+164, catHeight-34, parseInt(document.getElementById('cat').value)+144, catHeight+1, parseInt(document.getElementById('cat').value)+100, catHeight+40)
        ctx.fill()

        /* Feet */
        ctx.fillStyle = document.getElementById('c').value
        ctx.beginPath()
        ctx.fillRect(parseInt(document.getElementById('cat').value)+8, catHeight+50, 8, 36)
        ctx.moveTo(parseInt(document.getElementById('cat').value)+12, catHeight+86)
        ctx.arc(parseInt(document.getElementById('cat').value)+12, catHeight+86, 4, 0, Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.fillRect(parseInt(document.getElementById('cat').value)+24, catHeight+50, 8, 36)
        ctx.moveTo(parseInt(document.getElementById('cat').value)+28, catHeight+86)
        ctx.arc(parseInt(document.getElementById('cat').value)+28, catHeight+86, 4, 0, Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.fillRect(parseInt(document.getElementById('cat').value)+84, catHeight+50, 8, 36)
        ctx.moveTo(parseInt(document.getElementById('cat').value)+88, catHeight+86)
        ctx.arc(parseInt(document.getElementById('cat').value)+88, catHeight+86, 4, 0, Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.fillRect(parseInt(document.getElementById('cat').value)+100, catHeight+50, 8, 36)
        ctx.moveTo(parseInt(document.getElementById('cat').value)+104, catHeight+86)
        ctx.arc(parseInt(document.getElementById('cat').value)+104, catHeight+86, 4, 0, Math.PI)
        ctx.fill()

        /* Speach bubble */
        if (document.getElementById('meow').value != "") {
            let string = document.getElementById('meow').value
            let columnLength = 0
            let bubbleHeight = 0

            if (string.length > 28) {
                 bubbleHeight = 14*(string.length/28)
            } else {
                 bubbleHeight = 30
            }

            ctx.fillStyle = "white"
            ctx.beginPath()
            ctx.moveTo(600,852) 
            ctx.lineTo(550, 794)
            ctx.bezierCurveTo(450-bubbleHeight, 794+bubbleHeight, 450-bubbleHeight, 600-bubbleHeight, 550, 744-bubbleHeight)
            ctx.bezierCurveTo(650+bubbleHeight, 600-bubbleHeight, 650+bubbleHeight, 794+bubbleHeight, 570, 794)
            ctx.lineTo(600, 852)
            ctx.fill()

            ctx.fillStyle = document.getElementById('textColor').value
            ctx.font = "14px Arial"
            speak(string, columnLength, bubbleHeight)
            
            document.getElementById('meow').value = ""
        }
    }
}

document.body.onload = render

document.getElementById('x').onchange = render
document.getElementById('c').onchange = render
document.getElementById('cat').onchange = render
document.getElementById('meow').onchange = render