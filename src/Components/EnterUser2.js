// import React, {useState} from 'react';
// import axios from 'axios';
// import {Modal, Button} from "@material-ui/core";
//
// const EnterUser2 = ({userEntered}) => {
//     const [open, setOpen] = useState(true);
//     const [name, setName] = useState("");
//     const [err, setErr] = useState("");
//
//     const handleClose = () => setOpen(false);
//
//     const handleSubmit = (e) => {
//         axios.post("http://localhost:3000/api/users", {nickname: name})
//             .then(res => {
//                 if (res.data.success) {
//                     setErr("");
//                     handleClose();
//                     userEntered(res.data.data);
//                 } else {
//                     setErr(res.data.message);
//                 }
//             })
//     }
//
//     const handleHide = () => {
//
//     }
//
//     return (
//         <>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//             >
//                 {"bar"}
//             </Modal>
//             {/*<Modal show={show} onHide={handleHide} centered>*/}
//             {/*    <Modal.Header>*/}
//             {/*        <Modal.Title>Welcome to Awesome Chat</Modal.Title>*/}
//             {/*    </Modal.Header>*/}
//             {/*    <Modal.Body>*/}
//             {/*        <input*/}
//             {/*            value={name}*/}
//             {/*            onChange={e => setName(e.target.value)}*/}
//             {/*            type="text"*/}
//             {/*            className="form-control"*/}
//             {/*            placeholder="Enter Nickname"*/}
//             {/*        />*/}
//             {/*        {*/}
//             {/*            err &&*/}
//             {/*            <span className={"text-danger"}>*{err}</span>*/}
//             {/*        }*/}
//             {/*    </Modal.Body>*/}
//             {/*    <Modal.Footer>*/}
//             {/*        <Button variant="primary" onClick={handleSubmit}>*/}
//             {/*            Submit*/}
//             {/*        </Button>*/}
//             {/*    </Modal.Footer>*/}
//             {/*</Modal>*/}
//         </>
//     );
// }
//
// export default EnterUser2;