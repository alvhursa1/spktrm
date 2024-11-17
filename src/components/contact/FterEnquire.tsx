import React from 'react'
import Image from 'next/image'

const FterEnquire = () => {
    return (
        <div className="w-full">
            {/* Flex 1 */}
            <div className="flex w-full ">
                {/* Columna 1 */}
                <div className="w-1/4 flex items-center">

                </div>
                {/* Columna 2 */}
                <div className="w-1/2"></div>
                {/* Columna 3 - texto Link botones */}
                <div className="w-1/4 flex flex-col items-end pr-[3%]">

                </div>
            </div>

            {/* Flex 2 */}
            <div className="flex w-full ">
                {/* Columna 1 */}
                <div className="w-1/4 flex justify-center">
                    <a href="https://www.linkedin.com/company/spektrumagency/">
                        <Image src="/LN.svg" alt="LN Logo" layout="intrinsic" objectFit="contain" width={50} height={50} />
                    </a>
                </div>
                {/* Columna 2 */}
                <div className="w-1/4 flex justify-center">
                    <a href="https://www.instagram.com/spektrum.agency/">
                        <Image src="/IG.svg" alt="IG Logo" layout="intrinsic" objectFit="contain" width={42} height={42} />
                    </a>
                </div>
                {/* Columna 3 */}
                <div className="w-1/4 flex justify-center">
                    <a href="#">
                        <Image src="/WA.svg" alt="WA Logo" layout="intrinsic" objectFit="contain" width={70} height={70} />
                    </a>
                </div>
                {/* Columna 4 */}
                <div className="w-1/4 flex justify-center">
                    <a href="mailto:team@spektrumagency.us">
                        <Image src="/@.svg" alt="Email Logo" layout="intrinsic" objectFit="contain" width={46} height={46} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FterEnquire