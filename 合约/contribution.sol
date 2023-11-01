//SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.8.0;

// 创建众筹事件、捐赠到提款
contract Beneficence{
    struct funder{
        address payable  funderaddress;  //捐赠者地址   
        uint  Tomoney;  //捐献金额
        address payable Neederaddress;  //众筹募集者地址
        
    }
    mapping(uint => funder) fundermap;

    //捐款者地址对应的捐款金额的映射
    mapping(address => funder) Tomoneymap; 

    struct needer{
        address payable Neederaddress;  //众筹募集者地址
        uint goal;  //募集资金目标
        string fact;//募集者情况说明
        uint phone;  //募集者电话号码
        // uint number;  //申请编号
        uint amount;  //已募集到的资金
        uint abc;
        // mapping(uint => Neederaddress) cmp;

        address payable  funderaddress;  //捐赠者地址
        uint  Tomoney;  //捐献金额

        uint funderAccount;   //捐赠者的ID（数量）
        mapping(uint => funder) fundermap;    //映射，将捐赠者的ID与捐赠者绑定在一起
    }
    
    uint public neederAccount;  //建立众筹受益人的库并映射

    //申请者地址对应的申请编号的映射
    mapping(address => uint) public NumMap; 
	
    mapping(uint => needer)  public needmap;  //将受益人的ID与受益人绑定在一起，从而能够更好的管理受益人

    //添加新的募集者事件
    event NewNeederEvt(address Neederaddress,uint goal,string fact,uint phone);

    //捐款者捐款事件
    event contributeEvt(address _address,uint neederAmount,uint Tomoney);

    //当募集的资金满足条件事件
    event IsCompeleteEvt(uint neederAmount,uint Tomoney);


    //添加新的募集者
    function NewNeeder(address payable _Neederaddress,uint _goal,string memory _fact,uint _phone) public{
        
        //添加新的募集者事件
        emit NewNeederEvt(_Neederaddress, _goal ,_fact,_phone);

        //直接将new出来的对象存储在needmap中
        needer storage n = needmap[neederAccount];
        n.Neederaddress = _Neederaddress;
        n.goal = _goal;
        // n.number = _number;
        n.fact = _fact;
        n.phone = _phone;
        n.amount = 0;
        n.funderAccount = 0;
        NumMap[msg.sender] = neederAccount;
        neederAccount++;

        
    }


    
    //捐款者进行捐款，_address 捐赠者的地址，_neederAmount 受益人的ID
    function contribute(address payable _address,uint _neederAmount) public payable{

        //捐款者捐款事件
        emit contributeEvt(msg.sender,_neederAmount,msg.value);

        //捐款金额赋值
        Tomoneymap[msg.sender].Tomoney = msg.value;

        //获得受益人的实例 
        needer storage _needer = needmap[_neederAmount];

        //将募集者的地址进行实例(赋值)
        Tomoneymap[msg.sender].Neederaddress =  _needer.Neederaddress;

        //将捐款者与捐款金额进行实例化（赋值）
        _needer.funderaddress = _address;
        _needer.Tomoney = msg.value;

        //进行捐款 
        _needer.amount += msg.value;
        
        //捐赠者+1
        _needer.funderAccount++; 

        //让受益人知道捐赠者的信息
        // _needer.fundermap[_needer.funderAccount] = funder(_address , msg.value);  
    }
    
    //当募集的资金满足条件
    function IsCompelete(uint _neederAmount) public payable{

        //当募集的资金满足条件事件
        emit IsCompeleteEvt(_neederAmount,msg.value);

        //获得受益人的实例
        needer storage _needer = needmap[_neederAmount];

        //进行判断是否已经大于目标金额
        require(_needer.amount >= _needer.goal,"Less than target amount");

        //转账给受益人
        payable(_needer.Neederaddress).transfer(_needer.amount);  

        // 进行判断是否已经大于目标金额
        // if(_needer.amount >= _needer.goal){      
        //     payable(_needer.Neederaddress).transfer(_needer.amount);                                   
        //     // _needer.Neederaddress.transfer(_needer.amount); //把合约地址的钱 转给受益人
        // }
    }

    //通过募集者的ID，来查看募集者的地址，目标金额，贫困情况，电话号码，已经凑集的金额，捐款者的数量
    function look(uint figure) public view returns(address Neederaddress,uint goal, string memory fact,uint phone,uint amount,uint funderAccount){
        return (
            needmap[figure].Neederaddress,
            needmap[figure].goal,
            needmap[figure].fact,
            needmap[figure].phone,
            // needmap[figure].number,
            needmap[figure].amount,
            needmap[figure].funderAccount
            );

    }

    //通过其捐款者的地址查看他捐了多少钱，并给谁（募集者）捐款了
    function lookAddress(address funderaddress) public view returns(uint,address){
        return (
            Tomoneymap[funderaddress].Tomoney,
            Tomoneymap[funderaddress].Neederaddress
            );    
    }

    //通过募集者ID获取 捐款者地址 和 捐款金额
    function lookFigure(uint figure) public view returns(address funderaddress,uint Tomoney){                 
        return (
            needmap[figure].funderaddress,
            needmap[figure].Tomoney
            );

    }

    //获取用户编号
    // function getNum(address needers) public view returns(uint) {
    //      return (
    //         NumMap[funderaddress].Tomoney,
    //         ); 
    // }
}

