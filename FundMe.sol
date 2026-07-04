//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ConversionRate} from "./Price_Converter.sol";

contract FundMe{
    using ConversionRate for uint256;
    uint256 public constant MINIMUM_USD = 5e18;

    address public immutable i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    address[] public funders;
    mapping(address funder => uint256 amountFunded) public addressToAmountFunded;

    function fund() public payable{
        require(msg.value.getConversionRate()>= MINIMUM_USD, "didn't send enough eth");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] +=msg.value;
    }


    function withdraw() public onlyowner {
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++){
        address funder = funders[funderIndex];
        addressToAmountFunded[funder] = 0;
    }
        funders = new address[](0);

        //withdraw the funds
        (bool callSuccess, ) = payable(msg.sender).call{value : address(this).balance}("");
        require(callSuccess , "Send Failed");
    }
 
    modifier onlyowner{
        require(msg.sender == i_owner , "Sender is not owner");
    _;
    }

    receive() external payable{
        fund();
    }
    
    fallback() external payable{
        fund();
     }
}



