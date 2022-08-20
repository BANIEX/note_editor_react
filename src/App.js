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
    this.clear();

    console.log(this.state.bold)
    if (this.state.bold === false) {
      document.querySelector(".smart-option-bold").style.color = "black";
      document.querySelector(".smart-option-bold").style.backgroundColor =
        "rgb(181, 178, 172)";
      this.setState({
        bold: true
      });
    } else {
      document.querySelector(".smart-option-bold").style.color =
        "rgb(181, 178, 172)";
      document.querySelector(".smart-option-bold").style.backgroundColor =
        "black";
      this.setState({
        bold: false,
      });


    }
    console.log(this.state.bold);
    let bold = this.state.bold === false ? "bold" : "normal";
    let italic = this.state.italic === true ? "italic" : "normal"
    let underline = this.state.underline === true ? "underline" : "none";

    const smartContentArea = document.querySelector(".smart-content-area");
    smartContentArea.innerHTML = `${smartContentArea.innerHTML}<span class="latest" style="font-style:${italic};font-weight:${bold};text-decoration:${underline}">&#8203</span>`;

    let length = document.getElementsByClassName("latest").length;
    console.log(length)

    const el = document.getElementsByClassName("latest")[length-1];
    const selection = window.getSelection();
    const range = document.createRange();
    selection.removeAllRanges();
    range.selectNodeContents(el);
    range.collapse(false);
    selection.addRange(range);
    el.focus();

  }

  italic_click() {

    this.clear();

    if (this.state.italic === false) {
      document.querySelector(".smart-option-italic").style.color = "black";
      document.querySelector(".smart-option-italic").style.backgroundColor =
        "rgb(181, 178, 172)";
      this.setState({
        italic: true,
      });
    } else {
      document.querySelector(".smart-option-italic").style.color =
        "rgb(181, 178, 172)";
      document.querySelector(".smart-option-italic").style.backgroundColor =
        "black";
      this.setState({
        italic: false,
      });
    }

     console.log(this.state.italic);
     let bold = this.state.bold === true ? "bold" : "normal";
     let italic = this.state.italic === false ? "italic" : "normal";
     let underline = this.state.underline === true ? "underline" : "none";

     const smartContentArea = document.querySelector(".smart-content-area");
     smartContentArea.innerHTML = `${smartContentArea.innerHTML}<span class="latest" style="font-style:${italic};font-weight:${bold};text-decoration:${underline}">&#8203</span>`;

     let length = document.getElementsByClassName("latest").length;
     console.log(length);

     const el = document.getElementsByClassName("latest")[length - 1];
     const selection = window.getSelection();
     const range = document.createRange();
     selection.removeAllRanges();
     range.selectNodeContents(el);
     range.collapse(false);
     selection.addRange(range);
     el.focus();
  }

  underline_click() {


    this.clear();

    if (this.state.underline === false) {
      document.querySelector(".smart-option-underline").style.color = "black";
      document.querySelector(".smart-option-underline").style.backgroundColor =
        "rgb(181, 178, 172)";
      this.setState({
        underline: true,
      });
    } else {
      document.querySelector(".smart-option-underline").style.color =
        "rgb(181, 178, 172)";
      document.querySelector(".smart-option-underline").style.backgroundColor =
        "black";
      this.setState({
        underline: false,
      });
    }
     console.log(this.state.underline);
     let bold = this.state.bold === true ? "bold" : "normal";
     let italic = this.state.italic === true ? "italic" : "normal";
     let underline = this.state.underline === false ? "underline" : "none";

     const smartContentArea = document.querySelector(".smart-content-area");
     smartContentArea.innerHTML = `${smartContentArea.innerHTML}<span class="latest" style="font-style:${italic};font-weight:${bold};text-decoration:${underline}">&#8203</span>`;

     let length = document.getElementsByClassName("latest").length;
     console.log(length);

     const el = document.getElementsByClassName("latest")[length - 1];
     const selection = window.getSelection();
     const range = document.createRange();
     selection.removeAllRanges();
     range.selectNodeContents(el);
     range.collapse(false);
     selection.addRange(range);
     el.focus();








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
      <div className="container">
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

          <div
            className="smart-content-area"
            contenteditable="true"
            onFocus={this.clear}
            onBlur={this.restoreClear}
          >
            {this.state.holder}
          </div>
          {/* <div>
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
            >
              yaaaaaaaaaaa
            </span>
          </div> */}
          {/* <div>
            <span>suuuuupp bro</span>
          </div> */}

          {/* <div id="cd" contenteditable="true">
            eq<span>hiiii</span>
            <span>banko</span>
          </div> */}

          {/* <span id="hello">jhshkj</span> */}
        </div>
      </div>
    );
  }
}


export default App;
