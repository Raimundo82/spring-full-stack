(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){e.exports=n(317)},169:function(e,t,n){},170:function(e,t,n){},214:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),o=n.n(i),l=(n(168),n(169),n(76)),s=n(77),c=n(90),u=n(78),d=n(91),m=function(e){return r.a.createElement("div",{style:{width:"1400px",margin:"0 auto",textAlign:"center"}},e.children)},f=n(319),h=n(21),p=(n(170),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement(m,null,void 0!==e.numberOfStudents?r.a.createElement(f.a,{style:{backgroundColor:"#f56a00",marginRight:"5px"},size:"large"},e.numberOfStudents):null,r.a.createElement(h.a,{onClick:function(){return e.handleAddStudentClickEvent()},type:"primary"},"Add new student +")))}),E=(n(214),n(63)),g=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,e.json().then(function(e){t.error=e}),Promise.reject(t)},S=function(){return Object(E.a)("api/students").then(g)},b=function(e,t){return Object(E.a)("api/students/".concat(e),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(t)}).then(g)},y=function(e){return Object(E.a)("api/students/".concat(e),{method:"DELETE"}).then(g)},N=n(161),v=n(88),A=n(322),C=n(326),k={marginBottom:"10px"},M=Object(N.a)({backgroundColor:"#f50",color:"white"},k),w=function(e){return r.a.createElement(v.a,{initialValues:{firstName:"",lastName:"",email:"",gender:""},validate:function(e){var t={};return e.firstName||(t.firstName="First Name Required"),e.lastName||(t.lastName="Last Name Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email Required",e.gender?["MALE","male","FEMALE","female"].includes(e.gender)||(t.gender="Gender must be (MALE, male, FEMALE, female)"):t.gender="Gender Required",t},onSubmit:function(t,n){var a=n.setSubmitting;(function(e){return Object(E.a)("api/students",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(g)})(t).then(function(){e.onSuccess()}).catch(function(t){e.onFailure(t)}).finally(function(){a(!1)})}},function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit,s=e.isSubmitting,c=e.submitForm,u=e.isValid;return r.a.createElement("form",{onSubmit:l},r.a.createElement(A.a,{style:k,name:"firstName",onChange:i,onBlur:o,value:t.firstName,placeholder:"First name. E.g John"}),n.firstName&&a.firstName&&r.a.createElement(C.a,{style:M},n.firstName),r.a.createElement(A.a,{style:k,name:"lastName",onChange:i,onBlur:o,value:t.lastName,placeholder:"Last name. E.g Jones"}),n.lastName&&a.lastName&&r.a.createElement(C.a,{style:M},n.lastName),r.a.createElement(A.a,{style:k,name:"email",type:"email",onChange:i,onBlur:o,value:t.email,placeholder:"Email. E.g example@gmail.com"}),n.email&&a.email&&r.a.createElement(C.a,{style:M},n.email),r.a.createElement(A.a,{style:k,name:"gender",onChange:i,onBlur:o,value:t.gender,placeholder:"Gender. E.g Male or Female"}),n.gender&&a.gender&&r.a.createElement(C.a,{style:M},n.gender),r.a.createElement(h.a,{onClick:function(){return c()},type:"submit",disabled:s|(a&&!u)},"Submit"))})},O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.submitter,n=e.initialValues;return r.a.createElement(v.a,{initialValues:n,validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.firstName||(t.firstName="First name required"),e.lastName||(t.lastName="Last name required"),t},onSubmit:function(e,n){var a=n.setSubmitting;console.log(e),t(e),a(!1)}},function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,o=e.isValid,l=e.handleBlur,s=e.handleSubmit,c=e.isSubmitting,u=e.submitForm;return r.a.createElement("form",{onSubmit:s},r.a.createElement(A.a,{style:{marginBottom:"5px"},name:"firstName",onChange:i,onBlur:l,value:t.firstName}),n.firstName&&a.firstName&&r.a.createElement(C.a,{style:{marginBottom:"5px"},color:"#f50"},n.firstName),r.a.createElement(A.a,{style:{marginBottom:"5px"},name:"lastName",onChange:i,onBlur:l,value:t.lastName}),n.lastName&&a.lastName&&r.a.createElement(C.a,{style:{marginBottom:"5px"},color:"#f50"},n.lastName),r.a.createElement(A.a,{style:{marginBottom:"5px"},type:"email",name:"email",onChange:i,onBlur:l,value:t.email}),n.email&&a.email&&r.a.createElement(C.a,{style:{marginBottom:"5px"},color:"#f50"},n.email),r.a.createElement(h.a,{onClick:function(){return u()},type:"submit",disabled:c|(a&&!o)},"Submit"))})}}]),t}(a.Component),x=n(325),I=function(e,t,n){x.a[e]({message:t,description:n})},j=function(e,t){return I("error",e,t)},B=n(9),F=n(323),V=n(324),L=n(156),T=n(320),q=n(321),R=n(55),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={students:[],isFetching:!1,selectedStudent:{},isAddStudentModalVisisble:!1,isEditStudentModalVisible:!1},n.openAddStudentModal=function(){return n.setState({isAddStudentModalVisisble:!0})},n.closeAddStudentModal=function(){return n.setState({isAddStudentModalVisisble:!1})},n.openEditStudentModal=function(){return n.setState({isEditStudentModalVisible:!0})},n.closeEditStudentModal=function(){return n.setState({isEditStudentModalVisible:!1})},n.openNotificationWithIcon=function(e,t,n){return x.a[e]({message:t,description:n})},n.fetchStudents=function(){n.setState({isFetching:!0}),S().then(function(e){return e.json().then(function(e){console.log(e),n.setState({students:e,isFetching:!1})})}).catch(function(e){console.log(e.error);var t=e.error.message,a=e.error.error;j(t,a),n.setState({isFetching:!1})})},n.editUser=function(e){n.setState({selectedStudent:e}),n.openEditStudentModal()},n.updateStudentFormSubmitter=function(e){b(e.studentId,e).then(function(){n.openNotificationWithIcon("success","Student updated","".concat(e.studentId," was updated")),n.closeEditStudentModal(),n.fetchStudents()}).catch(function(e){console.error(e.error),n.openNotificationWithIcon("error","error","(".concat(e.error.status,") ").concat(e.error.error))})},n.deleteStudent=function(e){y(e).then(function(){n.openNotificationWithIcon("success","Student deleted","".concat(e," was deleted")),n.fetchStudents()}).catch(function(e){n.openNotificationWithIcon("error","error","(".concat(e.error.status,") ").concat(e.error.error))})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchStudents()}},{key:"render",value:function(){var e=this,t=this.state,n=t.students,i=t.isFetching,o=t.isAddStudentModalVisisble,l=function(){return r.a.createElement("div",null,r.a.createElement(F.a,{title:"Add new student",visible:o,onOk:e.closeAddStudentModal,onCancel:e.closeAddStudentModal,width:1e3},r.a.createElement(w,{onSuccess:function(){e.closeAddStudentModal(),e.fetchStudents()},onFailure:function(e){var t=e.error.message,n=e.error.httpStatus;j(t,n)}})),r.a.createElement(F.a,{title:"Edit",visible:e.state.isEditStudentModalVisible,onOk:e.closeEditStudentModal,onCancel:e.closeEditStudentModal,width:1e3},r.a.createElement(V.a,{title:"".concat(e.state.selectedStudent.studentId)}),r.a.createElement(O,{initialValues:e.state.selectedStudent,submitter:e.updateStudentFormSubmitter})),r.a.createElement(p,{numberOfStudents:n.length,handleAddStudentClickEvent:e.openAddStudentModal}))};if(i)return r.a.createElement(m,null,r.a.createElement(L.a,{indicator:r.a.createElement(B.a,{type:"loading",style:{fontSize:24},spin:!0})}));if(n&&n.length){var s=[{title:"",key:"avatar",render:function(e,t){return r.a.createElement(f.a,{size:"large"},"".concat(t.firstName.charAt(0).toUpperCase()).concat(t.lastName.charAt(0).toUpperCase()))}},{title:"Student Id",dataIndex:"studentId",key:"studentId"},{title:"First Name",dataIndex:"firstName",key:"firstName"},{title:"Last Name",dataIndex:"lastName",key:"lastName"},{title:"Email",dataIndex:"email",key:"email"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Action",key:"action",render:function(t,n){return r.a.createElement(a.Fragment,null,r.a.createElement(T.a,{placement:"topRight",title:"Are you sure to delete ".concat(n.studentId),onConfirm:function(){return e.deleteStudent(n.studentId)},okText:"Yes",cancelText:"No",onCancel:function(e){return e.stopPropagation()}},r.a.createElement(h.a,{type:"danger",onClick:function(e){return e.stopPropagation()}},"Delete")),r.a.createElement(h.a,{style:{marginLeft:"5px"},type:"primary",onClick:function(){return e.editUser(n)}},"Edit"))}}];return r.a.createElement(m,null,r.a.createElement(q.a,{style:{marginBottom:"100px"},dataSource:n,columns:s,pagination:!1,rowKey:"studentId"}),l())}return r.a.createElement(m,null,r.a.createElement(R.a,{description:r.a.createElement("h1",null,"No Students found")}),l())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.fa8db7d6.chunk.js.map