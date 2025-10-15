import React from 'react'

const Card = (props) => {       {/* We can also destructur props like -: {username , myObjects} . We can also write as {username = "Sid" , myObjects} , like if any username is not passed , we can create a deafult value as Sid or anything*/}
    console.log(props);
    console.log(props.channelName);
    
    
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 m-3">
                <img
                    src="https://media.gettyimages.com/id/1794866684/photo/mumbai-india-virat-kohli-of-india-celebrates-after-scoring-a-century-overtaking-sachin.jpg?s=612x612&w=gi&k=20&c=VO5AE--UKtKAjpnBnRG9ajH8OTxah5qlZMWAlYAj7Mk="
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{props.channel}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
                            tempora ipsum soluta amet corporis accusantium aliquid consectetur
                            eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        Read more
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card