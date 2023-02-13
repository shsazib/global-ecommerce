import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaMoneyCheckAlt } from 'react-icons/fa';

const Global_list = () => {
  return (
    <>
        <div className='global_list_section'>
            <div className='single_global_list gap-5'>
                <MdLocalShipping className='single_global_list_icon text-[var(--theme)]' />
                <div>
                    <h2>Free Shipping & Returns</h2>
                    <p>For all orders over $100</p>
                </div>
            </div>
            <div className='single_global_list gap-5'>
                <BsFillChatDotsFill className='single_global_list_icon text-[var(--theme)]' />
                <div>
                    <h2>Customer Support</h2>
                    <p>Call or Email us 24X7</p>
                </div>
            </div>
            <div className='single_global_list gap-5'>
                <FiRefreshCcw className='single_global_list_icon text-[var(--theme)]' />
                <div>
                    <h2>Secure Payment</h2>
                    <p>We ensure secure payment</p>
                </div>
            </div>
            <div className='single_global_list gap-5'>
                <FaMoneyCheckAlt className='single_global_list_icon text-[var(--theme)]' />
                <div>
                    <h2>Money Back Guarantee</h2>
                    <p>Any back within 30 days</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Global_list;