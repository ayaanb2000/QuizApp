import React,{useState,useEffect} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import * as Progress from 'react-native-progress';


  const { width, height } = Dimensions.get('window')
  
  const quiz = [
     {
        "correctoption" : "option1",
        "options" : {
          "option1" : "Taj mahal",
          "option2" : "Qutub Minar",
          "option3" : "Red Fort",
          "option4" : "Hampi"
        },
        "question" : "Identify the monument ",
        "image" : "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        "correctoption" : "option4",
        "options" : {
            "option1" : "Rahul Dravid",
            "option2" : "Sachin Tedulkar",
            "option3" : "Virat Kohli",
            "option4" : "K L Rahul"
          },
        "question" : "Identify the sportsperson",
        "image": "https://wallpapercave.com/wp/wp4074601.jpg"
      },
       {
        "correctoption" : "option3",
        "options" : {
            "option1" : "Joe Biden",
            "option2" : "Donald Trump",
            "option3" : "Barack Obama",
            "option4" : "None of the above"
          },
        "question" : "Identify the personality",
        "image" : "https://wallpapercave.com/wp/wp2059689.jpg"
      },
       {
        "correctoption" : "option4",
        "options" : {
            "option1" : "BMW",
            "option2" : "Mercedes-Benz",
            "option3" : "Toyota",
            "option4" : "none of the above"
          },
        "question" : "Identify the symbol",
        "image" : "https://wallpapercave.com/wp/wp7401793.png"
      },
       {
        "correctoption" : "option4",
        "options" : {
            "option1" : "Australia",
            "option2" : "USA",
            "option3" : "Japan",
            "option4" : "Sri Lanka"
          },
        "question" : "Identify the flag",
        "image":"https://wallpapercave.com/fuwp/uwp7547.jpeg"
      }
  ]
 
  const Quiz = ()=> {

      const [disp, setdisp] = useState(quiz[0]);
      const [qn, setqn] = useState(0);
      const [q1, setq1] = useState(null);
      const [q2, setq2] = useState(null)
      const [q3, setq3] = useState(null)
      const [q4, setq4] = useState(null)
      const [q5, setq5] = useState(null)
      const [resp, setresp] = useState(false)
      const [correct, setcorrect] = useState(false)
      const [ansd, setansd] = useState(null)

      useEffect(() => {
           setdisp(quiz[qn]);
           setcorrect(false)
            setansd("")
            setresp(false)
            
            
            
           
            
            if(qn === 0 && q1 !== null){
                    setresp(true);
                    console.log("1"+q1);
                    console.log((resp && disp.correctoption === "option1"));
                    setansd(q1)
                    if(q1 === quiz[0].correctoption){
                        setcorrect(true)
                        
                    }
            }
            else if(qn === 1 && q2 !== null){

                    setresp(true);
                    console.log("2"+q2);
                    setansd(q2)
                    if(q2 === quiz[1].correctoption){
                        setcorrect(true);
                        
                    }
                    console.log(resp);
                    console.log(correct);
                    console.log(ansd);
                    console.log(resp && correct && ansd === "option1");
            }
            else if(qn === 2 && q3 !== null){
                    setresp(true);
                    console.log("3"+q3);
                    setansd(q3)
                    if(q3 === quiz[2].correctoption){
                        setcorrect(true)
                        
                    }
            }
            else if(qn === 3 && q4 !== null){
                    setresp(true);
                    console.log("4"+q4);
                    setansd(q4)
                    if(q4 === quiz[3].correctoption){
                        setcorrect(true)
                        
                    }
            }
            else if(qn === 4 && q5 !== null){
                    setresp(true);
                    console.log("5"+q5);
                    setansd(q5)
                    if(q5 === quiz[4].correctoption){
                        setcorrect(true)
                        
                    }
                    
            }
            
            
      }, [qn]);

      const select = (op)=>{

             if(qn === 0){
                  setq1(op)
             }
             else if(qn === 1){
                  setq2(op)
             }
             else if(qn === 2){
                  setq3(op)
             }
             else if(qn === 3){
                  setq4(op)
             }
             else if(qn === 4){
                  setq5(op)
             }
      }

      useEffect(() => {
            setcorrect(false)
            setansd("")
            setresp(false)
            if(qn === 0 && q1 !== null){
                    setresp(true);
                    setansd(q1)
                    if(q1 === quiz[0].correctoption){
                        setcorrect(true)
                        
                    }
            }
            else if(qn === 1 && q2 !== null){
                    setresp(true);
                    setansd(q2)
                    if(q2 === quiz[1].correctoption){
                        setcorrect(true);
                        
                    }
            }
            else if(qn === 2 && q3 !== null){
                    setresp(true);
                    setansd(q3)
                    if(q3 === quiz[2].correctoption){
                        setcorrect(true)
                       
                    }
            }
            else if(qn === 3 && q4 !== null){
                    setresp(true);
                    setansd(q4)
                    if(q4 === quiz[3].correctoption){
                        setcorrect(true)
                        
                    }
            }
            else if(qn === 4 && q5 !== null){
                    setresp(true);
                    setansd(q5)
                    if(q5 === quiz[4].correctoption){
                        setcorrect(true)
                       
                    }
            }

           

        }, [q1,q2,q3,q4,q5])

        const clearAll =()=>{

            setq1(null);
            setq2(null)
            setq3(null)
            setq4(null)
            setq5(null)
            setresp(false)
            setcorrect(false)
            setansd(null)
    
               
        }

    
      return (

          <ScrollView>
                <View >
                            <Image
                                source={{uri:disp.image}}
                                style={styles.select}
                                resizeMode="contain"
                            />
                      
                </View>
                <View style={styles.qust}>
                         <Text style={{fontSize:20}}>{disp.question}</Text>
                </View>
                <View>
                     {!resp || (resp && ansd !== "option1") ?
                      <TouchableOpacity onPress={()=>{select("option1")}} disabled={resp}  style={(resp && disp.correctoption === "option1") ? styles.optcorrect:styles.opt} >
                            <Text style={{fontSize:20}}>{disp.options.option1}</Text>
                      </TouchableOpacity>
                     : 
                      <TouchableOpacity onPress={()=>{select("option1")}} disabled={resp}  style={(resp && correct && ansd === "option1") ? styles.optcorrect : styles.optwrong} >
                          <Text style={{fontSize:20}}>{disp.options.option1}</Text>
                      </TouchableOpacity>
                      
                      }



                       {!resp || (resp && ansd !== "option2") ?
                      <TouchableOpacity  onPress={()=>{select("option2")}} disabled={resp} style={(resp && disp.correctoption === "option2") ? styles.optcorrect:styles.opt}>
                          <Text style={{fontSize:20}}>{disp.options.option2}</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity  onPress={()=>{select("option2")}} disabled={resp} style={(resp && correct && ansd === "option2") ? styles.optcorrect : styles.optwrong}>
                            <Text style={{fontSize:20}}>{disp.options.option2}</Text>
                        </TouchableOpacity>
                       }



                       {!resp || (resp && ansd !== "option3") ?
                      <TouchableOpacity onPress={()=>{select("option3")}} disabled={resp} style={(resp && disp.correctoption === "option3") ? styles.optcorrect:styles.opt}>
                          <Text style={{fontSize:20}}>{disp.options.option3}</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={()=>{select("option3")}} disabled={resp} style={(resp && correct && ansd === "option3") ? styles.optcorrect : styles.optwrong} >
                          <Text style={{fontSize:20}}>{disp.options.option3}</Text>
                      </TouchableOpacity>
                       }




                       {!resp || (resp && ansd !== "option4") ?
                      <TouchableOpacity onPress={()=>{select("option4")}} disabled={resp} style={(resp && disp.correctoption === "option4") ? styles.optcorrect:styles.opt}>
                          <Text style={{fontSize:20}}>{disp.options.option4}</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={()=>{select("option4")}} disabled={resp} style={(resp && correct && ansd === "option4") ? styles.optcorrect : styles.optwrong}>
                            <Text style={{fontSize:20}}>{disp.options.option4}</Text>
                        </TouchableOpacity>
                      }


                </View>
                <View style={styles.control}>
                      {qn === 0 ? 
                        <TouchableOpacity onPress={()=>{clearAll()}}>
                              <View style={styles.previous}>
                                <Text style={{color:"white",fontSize:16}}>Clear All</Text>
                              </View>
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity disabled={qn === 0} onPress={()=>{setqn(qn-1)}}>
                              <View style={styles.previous}>
                                <Icon name="arrow-back" color={"green"} size={30}/>
                              </View>
                        </TouchableOpacity>
                      }
                        <View style={styles.dots}>
                            {q1 === null ? <Text style= {styles.dot}>●</Text> 
                            :
                              <Text style= {  q1 === quiz[0].correctoption ? styles.dotCorr : styles.dotWrg}>●</Text>
                            }
                            {q2 === null ? <Text style= {styles.dot}>●</Text> 
                            :
                              <Text style= {  q2 === quiz[1].correctoption ? styles.dotCorr : styles.dotWrg}>●</Text>
                            }
                            {q3 === null ? <Text style= {styles.dot}>●</Text> 
                            :
                              <Text style= {  q3 === quiz[2].correctoption ? styles.dotCorr : styles.dotWrg}>●</Text>
                            }
                            {q4 === null ? <Text style= {styles.dot}>●</Text> 
                            :
                              <Text style= { q4 === quiz[3].correctoption ? styles.dotCorr : styles.dotWrg}>●</Text>
                            }
                            {q5 === null ? <Text style= {styles.dot}>●</Text> 
                            :
                              <Text style= {  q5 === quiz[4].correctoption ? styles.dotCorr : styles.dotWrg}>●</Text>
                            }
                            
                            {/* <Text style= {q2 !== null ? styles.dotActive : styles.dot}>●</Text>
                            <Text style= {q3 !== null ? styles.dotActive : styles.dot}>●</Text>
                            <Text style= {q4 !== null ? styles.dotActive : styles.dot}>●</Text>
                            <Text style= {q5 !== null ? styles.dotActive : styles.dot}>●</Text> */}
                        </View>
                        {qn === 4 ? 
                        <TouchableOpacity >
                            <View style={styles.next}>
                                 <Text style={{color:"white",fontSize:16}}>Thank U</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity  onPress={()=>{setqn(qn+1)}}>
                            <View style={styles.next}>
                                  <Icon name="arrow-forward" color={"green"} size={30}/>
                            </View>
                        </TouchableOpacity>
                        } 

                    
                   
                </View>
                <View style={styles.bar}> 
                       
                       <Progress.Bar progress={(qn+1)/5} color={"black"} width={200} />
                       
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:60}}>
                      <Text style={{fontSize:25}}>{qn+1}</Text>
                      <Text style={{fontSize:25}}>5</Text>                 
                </View>
                

          </ScrollView>      

      );
    }
  
    export default Quiz;
  const styles = StyleSheet.create({
   
    oval: {
    width: width * 90/100,
    borderRadius: 20,
    backgroundColor: 'green'
    },
    container: {
      flex: 1,
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      margin: 15,
      color: "white"
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    select:{

        width:"85%",
        height:150,
        marginTop:30,
        borderColor:"grey",
        borderRadius:20,
        alignSelf:"center"
      },
    qust:{

         alignSelf:"center",
         marginVertical:20,
             
    },
    opt:{
        marginVertical:15,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:10,
        width:"90%",
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    optcorrect:{
        marginVertical:15,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:10,
        width:"90%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green"
    },
    optwrong:{
        marginVertical:15,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:10,
        width:"90%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red"
    },
    control:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20,
        marginTop:50,
   },
   dots:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
   },
   previous:{
        
        width:80,
        height:80,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"black",
        borderRadius:30

        
   },
   next:{

        width:80,
        height:80,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"black",
        borderRadius:30

   },
   dotCorr:{
       color:"green",
       fontSize:30
   },
   dotWrg:{
        color:"red",
        fontSize:30
    },
   dot:{
       color:"grey",
       fontSize:30,
   },
   bar:{
     justifyContent:"center",
     alignSelf:"center",
     marginTop:30,
    //  flexDirection:"row"
   }
  });