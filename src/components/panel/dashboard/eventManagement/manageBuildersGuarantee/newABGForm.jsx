import React from 'react';

const NewABGForm = () => {
    return (
        <form className="mt-5">
            <div className="form-row newAES">
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">متراژ غرفه از</label>
                    <div className="input-group">
                        <input type="text"
                               required
                               className="form-control" id="firstName" placeholder="وارد کنید"/>
                    </div>
                </div>
            </div>
            <div className="form-row newAES">
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">متراژ غرفه تا</label>
                    <div className="input-group">
                        <input type="text"
                               required
                               className="form-control" id="firstName" placeholder="وارد کنید"/>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center">
                <button className="btn btn-success mt-5" type="submit">ثبت و ایجاد</button>
            </div>
        </form>
    );
};

export default NewABGForm;