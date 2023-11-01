const web3 = new Web3(Web3.givenProvider ||"HTTP://127.0.0.1:7545");
// const web3 = new Web3('ws//localhost:8546'); 



// console.log(web3);

let cmpaccounts = [];
web3.eth.getAccounts().then(function (accounts) {
	cmpaccounts = accounts
	console.log(cmpaccounts[0])
	// $('.showAccount').html(cmpaccounts[0])
	web3.eth.getBalance(cmpaccounts[0]).then(tx=>{
		console.log(tx)
		$('.showAccount').html(tx)
	})
});

// $('.showAccount').html.getBalance(cmpaccounts[0])

const abi =[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_neederAmount",
				"type": "uint256"
			}
		],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "neederAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Tomoney",
				"type": "uint256"
			}
		],
		"name": "IsCompeleteEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Neederaddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fact",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "phone",
				"type": "uint256"
			}
		],
		"name": "NewNeederEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "neederAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Tomoney",
				"type": "uint256"
			}
		],
		"name": "contributeEvt",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_neederAmount",
				"type": "uint256"
			}
		],
		"name": "IsCompelete",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_Neederaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_goal",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			}
		],
		"name": "NewNeeder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "figure",
				"type": "uint256"
			}
		],
		"name": "look",
		"outputs": [
			{
				"internalType": "address",
				"name": "Neederaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "fact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "phone",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "funderAccount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "funderaddress",
				"type": "address"
			}
		],
		"name": "lookAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "figure",
				"type": "uint256"
			}
		],
		"name": "lookFigure",
		"outputs": [
			{
				"internalType": "address",
				"name": "funderaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Tomoney",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "neederAccount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "needmap",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "Neederaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "fact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "phone",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "abc",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "funderaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Tomoney",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "funderAccount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "NumMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var myContract = new web3.eth.Contract(abi, '0x99b7C009590Cdf1d7e1Ef4D9Dc7d1379f5c42C58');
// console.log("myContract====>",myContract)
// console.log(cmpaccounts[0])


//添加新的募集者
$("#NewNeeder").click(function (){
        // alert(1)
        var Neederaddress = $("#Neederaddress").val()
        var goal = $("#goal").val()
        var fact = $("#fact").val()
        var phone = $("#phone").val()
        // var number = $("#number").val()
        myContract.methods.NewNeeder(Neederaddress,goal,fact,phone).send({
            from: cmpaccounts[0],
            gas: 1500000,
            gasPrice: '3000000'
        }).then(function (result) {
            console.log(result)
            // alert(1)
        })
    })


//捐款者进行捐款
$("#contribute").click(function () {
	// alert(1)
    var _address = $("#_address").val()
    var Tomoney = $("#Tomoney").val()
	var _neederAmount = $("#_neederAmount").val()
	myContract.methods.contribute(_address,_neederAmount).send({
		from: cmpaccounts[0],
		gas: 1500000,
		gasPrice: '3000000',
		value:Tomoney*10**18
	}).then(function (result) {
		console.log(result)
	})
})


//当募集的资金满足条件
$("#IsCompelete").click(function () {
	// alert(1)
	var _neederAmount = $("#_neederAmount").val()
	myContract.methods.IsCompelete(_neederAmount).send({
		from: cmpaccounts[0],
		gas: 1500000,
		gasPrice: '3000000',
	}).then(function (result) {
		console.log(result)
	
	})
})

//通过募集者的ID，来查看募集者的地址，目标金额，贫困情况，电话号码，已经凑集的金额，捐款者的数量
//获取当前出价的信息
function lookmjz(){
	// alert(1)
    var figure = $("#figure").val()
	myContract.methods.look(figure).call({
		from: cmpaccounts[0],
	}).then(function (result) {
		console.log(result)
		$('.look1').html(result[0])
		$('.look2').html(result[1])
        $('.look3').html(result[2])
        $('.look4').html(result[3])
        $('.look5').html(result[4])
        $('.look6').html(result[5])
        // $('.look7').html(result[6])
	})
}

 //通过其捐款者的地址查看他捐了多少钱，并给谁（募集者）捐款了
 function lookAddressjkz(){
	// alert(1)
    var funderaddress = $("#funderaddress").val()
	myContract.methods.lookAddress(funderaddress).call({
		from: cmpaccounts[0],
	}).then(function (result) {
		console.log(result)
		$('.lookAddress1').html(result[0])
		$('.lookAddress2').html(result[1])
	})
}


//通过募集者ID获取 捐款者地址 和 捐款金额
function lookFigureid(){
	// alert(1)
    var figure = $("#figure").val()
	myContract.methods.lookFigure(figure).call({
		from: cmpaccounts[0],
	}).then(function (result) {
		console.log(result)
		$('.lookFigure1').html(result[0])
		$('.lookFigure2').html(result[1])
	})
}


//通过募集者地址来换取编号
function lookAdress(){
    var address = $("#address").val()
	myContract.methods.NumMap(address).call({
		from: cmpaccounts[0],
	}).then(function (result) {
		console.log(result)
		$('.cmp1').html(result[0])
	})
}

