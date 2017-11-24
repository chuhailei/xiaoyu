import React,{Component} from 'react';

export default function Schedule({status}){

    return (
        <div className="box w60 schedule-wrap">
            <div className="first-step check-step">
                <span>1</span>
                <p>绑定</p>
            </div>
            <div className={status.result == '2'?"last-step check-step":''}>
                <span>2</span>
                <p>{status.type}</p>
            </div>
        </div>
    )
}