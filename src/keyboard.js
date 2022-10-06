
export function Keyboard() {
    function handleClick(e) {
        console.log(e.target.value)
    }
    return (
        <div type='button' id="keyboardCont">
      
      <div type='button' id="firstRow">
        <button className='keyboardButton' type='button' id="Q"  value="Q" onClick={(e) => handleClick(e)}>Q</button>
        <button className='keyboardButton' type='button' id="W"  value="W" onClick="makeLetter(this)">W</button>
        <button className='keyboardButton' type='button' id="E"  value="E" onClick="makeLetter(this)">E</button>
        <button className='keyboardButton' type='button' id="R"  value="R" onClick="makeLetter(this)">R</button>
        <button className='keyboardButton' type='button' id="T"  value="T" onClick="makeLetter(this)">T</button>
        <button className='keyboardButton' type='button' id="Y"  value="Y" onClick="makeLetter(this)">Y</button>
        <button className='keyboardButton' type='button' id="U"  value="U" onClick="makeLetter(this)">U</button>
        <button className='keyboardButton' type='button' id="I"  value="I" onClick="makeLetter(this)">I</button>
        <button className='keyboardButton' type='button' id="O"  value="O" onClick="makeLetter(this)">O</button>
        <button className='keyboardButton' type='button' id="P"  value="P" onClick="makeLetter(this)">P</button>
      </div>
      <div type='button' id="secondRow">
        <button className='keyboardButton' type='button' id="A"  value="A" onClick="makeLetter(this)">A</button>
        <button className='keyboardButton' type='button' id="S"  value="S" onClick="makeLetter(this)">S</button>
        <button className='keyboardButton' type='button' id="D"  value="D" onClick="makeLetter(this)">D</button>
        <button className='keyboardButton' type='button' id="F"  value="F" onClick="makeLetter(this)">F</button>
        <button className='keyboardButton' type='button' id="G"  value="G" onClick="makeLetter(this)">G</button>
        <button className='keyboardButton' type='button' id="H"  value="H" onClick="makeLetter(this)">H</button>
        <button className='keyboardButton' type='button' id="J"  value="J" onClick="makeLetter(this)">J</button>
        <button className='keyboardButton' type='button' id="K"  value="K" onClick="makeLetter(this)">K</button>
        <button className='keyboardButton' type='button' id="L"  value="L" onClick="makeLetter(this)">L</button>
      </div>
      <div type='button' id="thirdRow">
        <button className='keyboardButton' type='button' id="ENT"  value="Z" onClick="makeLetter(this)">ENT</button>
        <button className='keyboardButton' type='button' id="Z"  value="Z" onClick="makeLetter(this)">Z</button>
        <button className='keyboardButton' type='button' id="X"  value="X" onClick="makeLetter(this)">X</button>
        <button className='keyboardButton' type='button' id="C"  value="C" onClick="makeLetter(this)">C</button>
        <button className='keyboardButton' type='button' id="V"  value="V" onClick="makeLetter(this)">V</button>
        <button className='keyboardButton' type='button' id="B"  value="B" onClick="makeLetter(this)">B</button>
        <button className='keyboardButton' type='button' id="N"  value="N" onClick="makeLetter(this)">N</button>
        <button className='keyboardButton' type='button' id="M"  value="M" onClick="makeLetter(this)">M</button>
        <button className='keyboardButton' type='button' id="DEL"  value="Z" onClick="makeLetter(this)">DEL</button>
      </div>
  </div>


    )
}