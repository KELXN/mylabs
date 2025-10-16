function ipToInt(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);
}

console.log(ipToInt('127.0.0.1'));      
console.log(ipToInt('10.0.0.1'));        
console.log(ipToInt('192.168.1.10'));    
console.log(ipToInt('165.225.133.150')); 
console.log(ipToInt('0.0.0.0'));        
console.log(ipToInt('8.8.8.8'));         
