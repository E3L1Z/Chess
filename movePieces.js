let movedPiece = ""
let moves = 0

let whitePieces = [""]

function movePiece(obj){
    let id = obj.id

    if(movedPiece == id){
        movedPiece = ""
    } else{
        movedPiece = id
    }

    console.log(movedPiece)
}

function sqrsPressed(obj){
    let id = obj.id
    let x, y = 0

    switch(id[0]){
        case "A":
            x = 432
            break

        case "B":
            x = 372
            break

        case "C":
            x = 312
            break

        case "D":
            x = 252
            break

        case "E":
            x = 192
            break

        case "F":
            x = 132
            break
        
        case "G":
            x = 72
            break

        case "H":
            x = 12
            break
    }

    switch(id[1]){
        case "1":
            y = 432
            break

        case "2":
            y = 372
            break

        case "3":
            y = 312
            break

        case "4":
            y = 252
            break

        case "5":
            y = 192
            break

        case "6":
            y = 132
            break
        
        case "7":
            y = 72
            break

        case "8":
            y = 12
            break
    }
    
    if(movedPiece){
        if(moves % 2 == 0){
            for(i in [1, 2, 3, 4, 5, 6, 7, 8]){
                document.getElementById(`white_Pawn_${i}`).style.pointerEvents = "none"
            }
        }
        document.getElementById(movedPiece).style.top = `${y}px`
        document.getElementById(movedPiece).style.right = `${x}px`
        movedPiece = ""
    }

    console.log(x, y)
}