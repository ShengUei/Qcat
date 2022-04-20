import React, {Component} from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
import articleService from "../services/ArticleService";

function convertFile(file) {
    return new Promise((resolve,reject)=>{
        // 建立FileReader物件
        let reader = new FileReader()
        // 註冊onload事件，取得result則resolve (會是一個Base64字串)
        reader.onload = () => { resolve(reader.result) }
        // 註冊onerror事件，若發生error則reject
        reader.onerror = () => { reject(reader.error) }
        // 讀取檔案
        reader.readAsDataURL(file)
    })
}

function showPreviewImage(src, index) {
    // console.log("src: " + src);
    document.querySelectorAll("img")[index].src = src;
}

class AddNewArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            errMsg: ''
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log("submit: " + this.state.content);
        let article = {
            artContent: this.state.content,
            artImg1: this.state.img1,
            artImg2: this.state.img2,
            artImg3: this.state.img3,
            artImg4: this.state.img4,
        }
        // console.log("Submit")
        articleService.addNewArticle(article)
            .then((response) => {
                // console.log(response)
                alert("新增文章成功");
                window.location.reload();
                document.querySelector("#textarea").value = '';
                document.querySelector("#img1").src = '';
            })
            .catch((error) => {
                    // console.log(error.response.data)
                    this.setState({
                        errMsg: error.response.data
                    });
                    alert(this.state.errMsg);
                }
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-6">
                        <div className="card shadow-sm">
                            <div className="card-body" >
                                <div className="article" >
                                    <div className="content" >
                                        {/*<CKEditor*/}
                                        {/*    editor={ Editor }*/}
                                        {/*    onChange={ ( event, editor ) => {*/}
                                        {/*        this.setState({*/}
                                        {/*            content:editor.getData()*/}
                                        {/*        })*/}
                                        {/*    } }*/}
                                        {/*/>*/}
                                        <textarea className="form-control" id={"textarea"} maxLength={300} style={{resize: "none"}}
                                                  onChange={() => {
                                                      // console.log(document.querySelector("#textarea").value);
                                                      let str = document.querySelector("#textarea").value;
                                                      let strRep = str.replace(/ /g, " ");
                                                      strRep = strRep.replace(/\n/g,"<br>");
                                                      // console.log("strRep: " + strRep);
                                                      this.setState({content: strRep});
                                                  }
                                        }></textarea>
                                        <img id={"img1"} src={""} alt={""} style={{marginTop:20, marginBottom:20}}/>
                                        {/*<img id={"img2"} src={""} alt={""}/>*/}
                                        {/*<img id={"img3"} src={""} alt={""}/>*/}
                                        {/*<img id={"img4"} src={""} alt={""}/>*/}
                                        <input id={"image"} type={"file"} accept={"image/png, image/jpeg, image/jpg"} multiple={false} style={{marginTop:10}}
                                               onChange={(e) => {
                                                   let fileArray = e.target.files;
                                                   // console.log(fileArray);
                                                   if (fileArray.length > 4) {
                                                       alert("You can only upload a maximum of 4 images");
                                                       e.target.value = "";
                                                   }
                                                   for (let i = 0; i < fileArray.length; i++) {
                                                       let base64 = convertFile(fileArray[i]);
                                                       // console.log("base64: " + base64);
                                                       base64.then(src => {
                                                           this.setState({img1: src})
                                                           // console.log("img1: " +  this.state.img1);
                                                           showPreviewImage(src, i);
                                                       })
                                                   }
                                               }
                                        } />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center" style={{marginTop:20}}>
                                        <div className="btn-group">
                                            <button onClick={this.submitHandler} type="button" className="btn btn-sm btn-outline-secondary">送出</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewArticleComponent;