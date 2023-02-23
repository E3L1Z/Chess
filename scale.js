let ids = ["white_Rook_1", "white_Rook_2", "white_Knight_1", "white_Knight_2", "white_Bishop_1", "white_Bishop_2", "white_Queen", "white_King", "white_Pawn_1", "white_Pawn_2", "white_Pawn_3", "white_Pawn_4", "white_Pawn_5", "white_Pawn_6", "white_Pawn_7", "white_Pawn_8", "black_Rook_1", "black_Rook_2", "black_Knight_1", "black_Knight_2", "black_Bishop_1", "black_Bishop_2", "black_Queen", "black_King", "black_Pawn_1", "black_Pawn_2", "black_Pawn_3", "black_Pawn_4", "black_Pawn_5", "black_Pawn_6", "black_Pawn_7", "black_Pawn_8"]

function markerPos(num, array){
    let x = 0

    switch(num){
        case array[0]:
            x = 445
            break

        case array[1]:
            x = 385
            break

        case array[2]:
            x = 325
            break

        case array[3]:
            x = 265
            break

        case array[4]:
            x = 205
            break

        case array[5]:
            x = 145
            break
        
        case array[6]:
            x = 85
            break

        case array[7]:
            x = 25
            break
    }
    return x * (window.innerWidth/1280)
}

function screenSizeChanged(){
    for(let i of ids){
        document.getElementById(i).style.width = `${60 * (window.innerWidth / 1280)}px`
        document.getElementById(i).style.height = `${60 * (window.innerWidth / 1280)}px`
        document.getElementById(i+"_Img").style.width = `${53 * (window.innerWidth / 1280)}px`
        document.getElementById(i+"_Img").style.height = `${53 * (window.innerWidth / 1280)}px`
    }

    for(let z of ["1", "2", "3", "4", "5", "6", "7", "8"]){
        for(let x of ["A", "B", "C", "D", "E", "F", "G", "H"]){
            document.getElementById(x+z).style.width = `${Math.floor(60 * (window.innerWidth / 1280) * 10) / 10}px`
            document.getElementById(x+z).style.height = `${Math.floor(60 * (window.innerWidth / 1280) * 10) / 10}px`
            document.getElementById(x+z+"Marker").style.top = `${markerPos(z, ["1", "2", "3", "4", "5", "6", "7", "8"])}px`
            document.getElementById(x+z+"Marker").style.right = `${markerPos(x, ["A", "B", "C", "D", "E", "F", "G", "Hx"])}px`
            document.getElementById(x+z+"Marker").style.width = `${30 * (window.innerWidth / 1280)}px`
            document.getElementById(x+z+"Marker").style.height = `${30 * (window.innerWidth / 1280)}px`
            document.getElementById(x+z+"Marker").style.borderRadius = `${(30 * (window.innerWidth / 1280))/2}px`
        }
    }

    let margins = document.getElementsByClassName("margin");
    for(let i = 0; i < margins.length; i++){
        console.log("Ran")
        margins[i].style.margin = `${10 * (window.innerWidth / 1280)}px`
    }

    document.getElementById("board").style.width = `${Math.ceil(500 * (window.innerWidth / 1280))}px`
    document.getElementById("board").style.height = `${Math.ceil((500 * (window.innerWidth / 1280)))}px`

    let pos = givePos()
    for(let i of pos){
        document.getElementById(i.id).style.top = `${i.pos[1]}px`
        document.getElementById(i.id).style.right = `${i.pos[0]}px`
    }
}

setTimeout(()=>{screenSizeChanged()}, 1)
window.addEventListener("resize", screenSizeChanged);