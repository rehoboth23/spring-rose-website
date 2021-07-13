import {Button} from 'react-bootstrap'

export default function FrontalDisplay() {
    return (
        <div expand="xxl"  className="z-1" id="FrontalDisplay">
                <div className="pad-top-50"><Button variant={"success"}>Some Random Text</Button></div>
                <div className="pad-top-50"><Button variant={"success"}>Some Random Text</Button></div>
                <div className="pad-top-50"><Button variant={"success"}>Some Random Text</Button></div>
        </div>
    )
}