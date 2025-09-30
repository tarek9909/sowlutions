#include <iostream>
using namespace std;
struct Node{
    Node* next;
    int num;
};
struct Node* head=NULL;
void addNode(int n){
    Node* new_node=new Node;
    new_node->num=n;
    new_node->next=head;
    head=new_node;
};
void display(){
    struct Node* temp=head;
    while(temp!=NULL){
        cout<<temp->num<<"-";
        temp=temp->next;
    }
    cout<<endl;
}
void removeNodes(int x){
    struct Node* temp=head;
    int position=1;
    if(position==1){
    while(temp!=NULL){
        if(temp->num>7){
           head=head->next;
           position++;
        }
        temp=temp->next;
    }
    }else{
          while(temp!=NULL){
        if(temp->num>7){
            temp=temp->next;
            head->next=head->next->next;
            position++;
        }
             temp=temp->next; 
             
          }
    }
}
int main()
{
    addNode(10);
    addNode(10);
    addNode(10);
    display();

    return 0;
}