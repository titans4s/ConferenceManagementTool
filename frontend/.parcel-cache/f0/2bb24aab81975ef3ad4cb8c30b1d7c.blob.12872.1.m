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
class Paper extends _react.Component {
    constructor(props){
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            Papers: ''
        };
    }
    onUpdate() {
        _axiosDefault.default.post(`http://localhost:9099/research/update/${this.props.match.params.id}`).then((response)=>{
            alert('Status successfully updated');
        }).catch((error)=>{
            console.log(error.message);
            alert(error.message);
        });
    }
    componentDidMount() {
        _axiosDefault.default.get(`http://localhost:9099/research/${this.props.match.params.id}`).then((response)=>{
            this.setState({
                Papers: response.data.data
            });
            console.log(this.state.Papers);
        }).catch((error)=>{
            alert(error.message);
        });
    }
    render() {
        return(/*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: "container",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 40
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("h1", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 43
            },
            __self: this
        }, this.state.Papers.papertitle), /*#__PURE__*/ _reactDefault.default.createElement("h3", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 45
            },
            __self: this
        }, "Abstract"), this.state.Papers.abstract, /*#__PURE__*/ _reactDefault.default.createElement("br", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 46
            },
            __self: this
        }), /*#__PURE__*/ _reactDefault.default.createElement("h2", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 47
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("a", {
            href: this.state.Papers.url,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 47
            },
            __self: this
        }, "View the paper")), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 49
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("button", {
            onClick: this.onUpdate,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\paperDetails.js",
                lineNumber: 50
            },
            __self: this
        }, "Approve"))));
    }
}
exports.default = Paper;

  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}