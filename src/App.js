import './App.css';
import React  from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bold: false,
      italic: false,
      underline: false,
      holder: <span>start typing..</span>
    };

    this.bold_click = this.bold_click.bind(this);
    this.italic_click = this.italic_click.bind(this);
    this.underline_click = this.underline_click.bind(this);
    this.clear = this.clear.bind(this);
    this.restoreClear = this.restoreClear.bind(this);


  }

  bold_click() {
    if (this.state.bold === false) {
      document.querySelector(".smart-option-bold").style.color = "black";
      document.querySelector(".smart-option-bold").style.backgroundColor =
        "white";
      this.setState({
        bold: true,
      });
    } else {
      document.querySelector(".smart-option-bold").style.color = "white";
      document.querySelector(".smart-option-bold").style.backgroundColor =
        "black";
      this.setState({
        bold: false,
      });

      const smartContentArea = document.querySelector(".smart-content-area");
      smartContentArea.innerHTML = `${smartContentArea.innerText}<strong id="easy">&#8203</strong>`;

      const el = document.getElementById("easy");
      const selection = window.getSelection();
      const range = document.createRange();
      selection.removeAllRanges();
      range.selectNodeContents(el);
      range.collapse(false);
      selection.addRange(range);
      el.focus();

        



    }
  }

  italic_click() {
    if (this.state.italic === false) {
      document.querySelector(".smart-option-italic").style.color = "black";
      document.querySelector(".smart-option-italic").style.backgroundColor =
        "white";
      this.setState({
        italic: true,
      });
    } else {
      document.querySelector(".smart-option-italic").style.color = "white";
      document.querySelector(".smart-option-italic").style.backgroundColor =
        "black";
      this.setState({
        italic: false,
      });
    }
  }

  underline_click() {
    if (this.state.underline === false) {
      document.querySelector(".smart-option-underline").style.color = "black";
      document.querySelector(".smart-option-underline").style.backgroundColor =
        "white";
      this.setState({
        underline: true,
      });
    } else {
      document.querySelector(".smart-option-underline").style.color = "white";
      document.querySelector(".smart-option-underline").style.backgroundColor =
        "black";
      this.setState({
        underline: false,
      });
    }
  }

  componentDidMount(){
        const smartContentArea = document.querySelector(".smart-content-area");

        // smartContentArea.addEventListener("onB")


  }

  clear(){
    const smartContentArea = document.querySelector(".smart-content-area");
    // smartContentArea.innerHTML = '<span><span/>'
    // alert("xup")
    if (smartContentArea.innerText.trim() === "start typing.."){
    // this.setState({
    //   holder: <span></span>,
    // });
    // console.log("clear part");
    smartContentArea.innerHTML = '<span><span/>'

    }

    // alert("hi")
  }

  restoreClear(){
        const smartContentArea = document.querySelector(".smart-content-area");
        // alert("hi")

    if(smartContentArea.innerText.trim() === ''){
      // smartContentArea.innerHTML = "<span>start typing..<span/>";
      // this.setState({
      //   holder: <span>start typing..</span>
      // });

      smartContentArea.innerHTML = `<span>start typing..</span>`;



    }
  }



  render() {
    return (
      <>
        <div className="smart-editor">
          <div className="smart-formatter">
            <span
              className="smart-formatter-option smart-option-bold"
              // onclick="smartjs.boldFormat(event)"
              onClick={this.bold_click}
            >
              <strong>Bold</strong>
            </span>

            <span
              className="smart-formatter-option smart-option-italic"
              onClick={this.italic_click}
            >
              <i>Italic</i>
            </span>
            <span
              className="smart-formatter-option smart-option-underline"
              onClick={this.underline_click}
            >
              Underline
            </span>
          </div>

          <div className="smart-content-area" contenteditable="true" onFocus={this.clear} onBlur={this.restoreClear}>
            {this.state.holder}
          </div>
          <div>
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
            >
              yaaaaaaaaaaa
            </span>
          </div>
          <div>
            <span>suuuuupp bro</span>
          </div>

          <div id="cd" contenteditable="true">
            eq<span>hiiii</span>
            <span>banko</span>
          </div>

          <span id="hello">jhshkj</span>
        </div>
      </>
    );
  }
}


export default App;
