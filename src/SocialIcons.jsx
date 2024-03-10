import React from "react";
import {Link} from "react-router-dom";
import {socialIcons} from "./Data";

export default function SocialIcons() {
    return (
        <>
            <div className="col-lg-3 px-5">
                <div className="d-inline-flex align-items-center py-2">
                    {socialIcons.map((val, index) => (
                        <div key={index}>
                            <Link className="me-3" href="">
                                {val.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
