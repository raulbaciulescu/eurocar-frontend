import React from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

export const CarSection2 = ({computedPrice}) => {
    return (
        <>
            <div className="w-full h-2/5 bg-myblue pt-20">
                <div className="flex items-center justify-evenly">
                    {/*<div className="flex justify-center mb-12">*/}
                        <div className="p-3 h-2/3 w-3/12">
                            <div className="bg-white border shadow-md text-gray-500">
                                    <a href="#">
                                        {/*<img src="https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGh5dW5kYWl8ZW58MHx8fHwxNjMxNjk3ODI1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="hover:opacity-90 w-full" alt="..." width="600" height="450"/></a>*/}
                                        <img src="/images/car1/main.PNG" className="hover:opacity-90" alt="..."/>
                                    </a>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">OPEL VIVARO 1.6</a></h4>
                                    <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr className="border-gray-200 my-4"/>
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center py-1 space-x-1">
                                            <Link to={"rent/car2"}>
                                                <Button text className="text-myblue" label="Închiriază"></Button>
                                            </Link>
                                        </div>
                                        <p className="font-bold text-gray-900">
                                            {
                                                computedPrice !== 0 ? computedPrice + "€" : ""
                                            }
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    {/*</div>*/}

                    {/*<div className="flex flex-wrap justify-center mb-12">*/}
                        <div className="p-3 h-2/3 w-3/12">
                            <div className="bg-white border shadow-md text-gray-500">
                                <a href="#">
                                    {/*<img src="https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGh5dW5kYWl8ZW58MHx8fHwxNjMxNjk3ODI1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="hover:opacity-90 w-full" alt="..." width="600" height="450"/></a>*/}
                                    <img src="/images/car2/main.PNG" className="hover:opacity-90" alt="..."/>
                                </a>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">OPEL VIVARO 1.6</a></h4>
                                    <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr className="border-gray-200 my-4"/>
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center py-1 space-x-1">
                                            <Link to={"rent/car2"}>
                                                <Button text className="text-myblue" label="Închiriază"></Button>
                                            </Link>
                                        </div>
                                        <p className="font-bold text-gray-900">
                                            {
                                                computedPrice !== 0 ? computedPrice + "€" : ""
                                            }
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}


