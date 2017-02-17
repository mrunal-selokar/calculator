calculate=function(method, no1,no2)
{
	var result=0;
	if(method=="add")
		result=no1+no2;
	else if(method=="subtract")
		result=no1-no2; 
	else if(method=="multiply")
		result=no1*no2;
	else if(method=="divide")
		result=no1/no2;  
	return result;
	
}
module.exports=calculate;