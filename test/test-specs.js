//var todoList = require('../api/controllers/todoListController');
var chai =require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

describe('tasks', function() {
  it('should list ALL todos on /tasks GET',/*function(done)*/(done)=>{
    chai.request(server)
    .get('/tasks')
    .end(function(err,res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });
  it('should list a SINGLE todo task on /tasks/:taskId GET',function(){
    chai.request(server)
    .get('./tasks/'+taskId)
    .end(function(err,res){
      res.should.have.property('taskId');
      res.should.have.property('title');
      res.should.have.property('status');
      done();
    })
  });
  it('should add a SINGLE task item on /tasks POST',function(){
    chai.request(server)
    .post('/tasks')
    .send({'taskId':7,'title' : 'bring Shanmukha from daycare','status': 'pending'})
    .end(function(err,res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
    //  res.body.should.have.property('taskId');
      res.body.should.have.property('title');
      res.body.should.have.property('_id');
      res.body.should.have.property('status');
    //  done();
    });
  });
  it('should update a SINGLE todo task on /tasks/taskId PUT',function(){
    chai.request(server)
  .get('/tasks')
  .end(function(err, res){
    chai.request(server)
      .put('/tasks/'+res.body[0].taskId)
      .send({'status': 'completed'})
      .end(function(error, response){
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('status');
        //response.body.status.should.be.a('object');
        //response.body.status.should.have.property('status');
        //response.body.UPDATED.should.have.property('_id');
        //response.body.status.status.should.equal('completed');
        done();
    });
  });
});
  it('should delete a SINGLE todo task on /tasks/:taskId DELETE',function(){
  chai.request(server)
  .get('/tasks')
  .end(function(err, res){
    chai.request(server)
      .delete('/blob/'+res.body[0].taskId)
      .end(function(error, response){
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('REMOVED');
        response.body.REMOVED.should.be.a('object');
        response.body.REMOVED.should.have.property('title');
        response.body.REMOVED.should.have.property('_id');
        response.body.REMOVED.title.should.equal('Bat');
        done();
    });
  });
});
});
