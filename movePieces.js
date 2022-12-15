let movedPiece = ""
let moves = 0

let whitePieces = ["white_Rook_1", "white_Rook_2", "white_Knight_1", "white_Knight_2", "white_Bishop_1", "white_Bishop_2", "white_Queen", "white_King", "white_Pawn_1", "white_Pawn_2", "white_Pawn_3", "white_Pawn_4", "white_Pawn_5", "white_Pawn_6", "white_Pawn_7", "white_Pawn_8"]
let blackPieces = ["black_Rook_1", "black_Rook_2", "black_Knight_1", "black_Knight_2", "black_Bishop_1", "black_Bishop_2", "black_Queen", "black_King", "black_Pawn_1", "black_Pawn_2", "black_Pawn_3", "black_Pawn_4", "black_Pawn_5", "black_Pawn_6", "black_Pawn_7", "black_Pawn_8"]

let positions = {white_Rook_1: "H1", white_Rook_2: "A1", white_Knight_1: "G1", white_Knight_2: "B1", white_Bishop_1: "F1", white_Bishop_2: "C1", white_King: "E1", white_Queen: "D1"}

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
            for(let i of whitePieces){
                document.getElementById(i).style.pointerEvents = "none"
            }

            for(let i of blackPieces){
                document.getElementById(i).style.pointerEvents = "auto"
            }
        }
        if(moves % 2 == 1){
            for(let i of whitePieces){
                document.getElementById(i).style.pointerEvents = "auto"
            }

            for(let i of blackPieces){
                document.getElementById(i).style.pointerEvents = "none"
            }
        }

        moves++

        document.getElementById(movedPiece).style.top = `${y}px`
        document.getElementById(movedPiece).style.right = `${x}px`
        movedPiece = ""
    }
}