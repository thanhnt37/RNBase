import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Container, Header, Title,
    Content, Footer, FooterTab,
    Button, Icon, InputGroup,
    Input, List, ListItem
} from 'native-base';

class ToDoLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: ""
        };
    }

    handleAddNewTask() {
        this.props.addNewTask(this.state.newTask);
        this.setState({newTask: ""});
        return true;
    }

    render() {
        const { items } = this.props;

        return (
            <Container>
                <Header style={{backgroundColor: "blue"}}>
                    <Title style={{paddingTop:10}}>To Do List</Title>
                </Header>

                <Content>
                    <InputGroup style={style.inputGroup}>
                        <Input
                            placeholder="Add Task"
                            placeholderTextColor="#ccc"
                            style={style.inputAddTask}
                            onChangeText = { (text) => this.setState({newTask: text}) }
                            value={this.state.newTask}
                        />

                        <Button primary bordered style={style.btnAddTask} onPress={() => this.handleAddNewTask()}>
                            <Text>Add</Text>
                        </Button>
                    </InputGroup>

                    <List dataArray={items}
                          renderRow={(item) =>
                              <ListItem>
                                  <Text>{item}</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Icon name='ios-call' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    inputGroup: {
        paddingTop:15,
        paddingHorizontal:15,
        marginBottom:20
    },
    inputAddTask: {
        borderWidth:1,
        borderRadius:50,
        paddingLeft:30,
        height:35
    },
    btnAddTask: {
        width:75,
        justifyContent:"center",
        marginLeft:10,
        height:35
    }
});

export default ToDoLists;
