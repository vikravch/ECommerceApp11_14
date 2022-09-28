import React from 'react';

interface Props{
    keyModal: string;
}
const ModalAddSmall:React.FC<Props> = (props: Props) => {
    let zipcodeClass = '';
    let inputType = 'text';
    if(props.keyModal !== 'Address') {
        zipcodeClass = 'visually-hidden';
    }
    if(props.keyModal == "Phone"){
        inputType = 'number';
    }

    return (
        <div className="modal fade" id={props.keyModal} tabIndex={-1} aria-labelledby={props.keyModal+"Label"}
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.keyModal+"Label"}>Add</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
                                <label htmlFor="recipient-name" className="col-form-label">{props.keyModal}:</label>
                                <input type={inputType} className="form-control" id="recipient-name"/>
                            </div>
                            <div className={zipcodeClass}>
                                <label htmlFor="recipient-name2" className="col-form-label">Zipcode:</label>
                                <input type="number" className="form-control" id="recipient-name2"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddSmall;