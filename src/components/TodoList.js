import React, {useState} from 'react';
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    ScrollView} from 'react-native';

export const TodoList =() =>{


   

    const [data,setData] = useState([{id: 1 , title:'Task 1' , active: false}]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [butonDisable,setDisable] = useState('');

    

    const renderItem = ({item,id})=>{
        return (
            <View>
                <TouchableOpacity style={styles.flatButon} value={butonDisable}
                onLongPress={() => deleteItemById(item.id)}
                 onPress={() => {onPressButtonarrived(item)}} disabled={item.id === disablearrived ? true : false}>
                <Text style={styles.flatText}>{item.title}</Text></TouchableOpacity>
            </View>

        );
    };
    const deleteItemById = id => {
        const filteredData = data.filter(item => item.id !== id);
        setData(filteredData);

    };
    const disableText = id => {
        let newArr=[...data];       

        setDisable(true);
    };

        
      const  onPressButtonarrived = id => {
            setDisable({ disablearrived: item.id })
            setDisable({ colorarrived: item.id })
    
          };

              
      const  disablearrived = id => {
        disabled;

      };







    
   
    
    const openModal=() => {
        setIsModalVisible(true);

    };

    const saveText = () => {


        if (!title.trim()) {
            alert('Lütfen listeye eklemek istediğiniz maddeleri giriniz.');
            return;

        }

   else{  let newArr=[...data];       

            newArr.push({id:newArr.length+1,title: title,active:false});
                setData(newArr);
                 setTitle('');


        }       
    };

    return(

        <View>
        <ScrollView>
        <View style={styles.container}>
            <SafeAreaView  style={styles.contentContainer}> 
            <Text style = {styles.title}>TodoList</Text>
            <FlatList testID="list"            
  data={data} renderItem={renderItem} />
            <TouchableOpacity style={styles.addIconBtnWrapper} onPress={openModal}>
                <Image  style={styles.addTextIcon}  
                source={require('../assets/add.png')}></Image>

            </TouchableOpacity>
            
            </SafeAreaView>
            <Modal transparent={true}  visible={isModalVisible}>

                <View style={styles.modalContentWrapper}>
                    <TouchableOpacity style={styles.closeBtnWrapper} onPress={() => setIsModalVisible(false)}>
                    <Image  style={styles.closeIcon}  
                source={require('../assets/cancel.png')}></Image>


                    </TouchableOpacity >
                    <View style={styles.inputWrapper}>
                        <TextInput testID="input"
                         value={title}
                        
                style={styles.textInput} 
                        onChangeText={(text) => setTitle(text)} clearButtonMode="always" 
                        placeholder={'Lütfen istediğiniz metni giriniz..'}></TextInput>

                        <TouchableOpacity style={styles.btnWrapper}
                        onPress={saveText} testID="button" >
                            <Text style={{textAlign:'center'}}>  Ekle</Text>

                        </TouchableOpacity>
                    
                    
                    </View>

                </View>

            </Modal>
            
        </View>
        </ScrollView>
        </View>
    );
};


const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',

    },
    contentContainer:{
        display:'flex',
        flex:1,
    },
    addTextIcon:{
        width: 50,
        height: 50,


    },
    addIconBtnWrapper:{
        alignItems:'center',
        marginBottom:20,
        marginTop:20,
    },
    
    modalContentWrapper:{
        height: '50%',
        marginTop: 'auto',
        backgroundColor: '#4DCFE0',
        padding: 15,

    },
    closeIcon:{
        width: 30,
        height: 30,

    },
    closeBtnWrapper:{
        alignItems:'flex-end',

    },
    inputWrapper:{
        marginTop: 50,
    },
    textInput:{
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        fontSize: 20,


    },
    btnWrapper:{

        backgroundColor: 'white',
        marginTop: 30,
        borderRadius:40,
        padding: 15,

    },
    flatButon:{
        marginLeft:10,
        marginRight:10,
        marginTop: 10,
        borderRadius:40,
        padding: 15,
        backgroundColor:'#4DCFE0',
    },
    flatText:{
        color: 'black',
        fontWeight:'bold',
    }

});
 
