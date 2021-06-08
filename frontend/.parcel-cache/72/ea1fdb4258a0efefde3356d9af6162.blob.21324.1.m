var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class ResearchReviewer extends _react.Component {
    constructor(props){
        super(props);
        this.state = {
            researches: []
        };
    }
    componentDidMount() {
        _axiosDefault.default.get('http://localhost:9099/research/get').then((response)=>{
            this.setState({
                researches: response.data.data
            });
            console.log(response.data.data);
            console.log(this.state.researches);
            console.log(this.state.researches.length);
        });
    }
    navigateSubject(e, researchid) {
        window.location = `/${researchid}`;
    }
    render() {
        return(/*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: "container",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Reviewer.js",
                lineNumber: 28
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("h1", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Reviewer.js",
                lineNumber: 29
            },
            __self: this
        }, "Research"), this.state.researches.length > 0 && this.state.researches.map((item, index)=>/*#__PURE__*/ _reactDefault.default.createElement("div", {
                key: index,
                className: "card mb-3",
                onClick: (e)=>this.navigateSubject(e, item._id)
                ,
                __source: {
                    fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Reviewer.js",
                    lineNumber: 31
                },
                __self: this
            }, /*#__PURE__*/ _reactDefault.default.createElement("h5", {
                __source: {
                    fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Reviewer.js",
                    lineNumber: 32
                },
                __self: this
            }, "Paper_Title:", item.papertitle))
        )));
    }
}
exports.default = ResearchReviewer;

  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}