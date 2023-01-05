import records from './record.json'

function Region() {
    var usdata=0,rudata=0,atdata=0,sadata=0,jpdata=0,esdata=0,frdata=0,indata=0,cadata=0,brdata=0,cndata=0    
    var key=0
    for( key in records ){
    const abc=records[key]
    if(abc.region==="US"){
    usdata +=abc.data
    }else if(abc.region==="RU"){
        rudata +=abc.data
    }else if(abc.region==="AT"){
        atdata +=abc.data
    }else if(abc.region==="SA"){
        sadata +=abc.data
    }else if(abc.region==="JP"){
        jpdata +=abc.data
    }else if(abc.region==="ES"){
        esdata +=abc.data
    }else if(abc.region==="IN"){
        indata +=abc.data
    }else if(abc.region==="FR"){
        frdata +=abc.data
    }else if(abc.region==="CA"){
        cadata +=abc.data
    }else if(abc.region==="BR"){
        brdata +=abc.data
    }else if(abc.region==="CN"){
        cndata +=abc.data
    }
}
console.log("us="+usdata)
console.log("ru="+rudata)
console.log("es="+esdata)
console.log("in="+indata)
console.log("sa="+sadata)
console.log("at="+atdata)
console.log("jp="+jpdata)
console.log("fr="+frdata)
console.log("ca="+cadata)
console.log("br="+brdata)
console.log("cn="+cndata)



}
    
export default Region