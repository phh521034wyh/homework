import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 2; i++) {
  listData.push({
    href: 'http://ant.design',
    title: ` 关于烤鸭 ${1}`,
    avatar: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=ba13b536708da9774a2f81298050f872/58ee3d6d55fbb2fbb3952e174c4a20a44623dc7d.jpg',
    description:
      '烤鸭是具有世界声誉的北京著名菜式，起源于中国南北朝时期，《食珍录》中已记有炙鸭，在当时是宫廷食品。用料为优质肉食鸭北京鸭，果木炭火烤制，色泽红润，肉质肥而不腻，外脆里嫩。北京烤鸭分为两大流派，而北京最著名的烤鸭店也即是两派的代表。它以色泽红艳，肉质细嫩，味道醇厚，肥而不腻的特色，被誉为“天下美味”。',
    content:
   '   这一特种纯北京鸭的饲养，约起于千年前左右，是因辽金元之历代帝王游猎，偶获此纯白野鸭种，后为游猎而养，一直延续下来，才得此优良纯种，并培育成今之名贵的肉食鸭种。即用填喂方法育肥的一种白鸭，故名填鸭”。不仅如此，北京鸭曾在百年以前传至欧美，经繁育一鸣惊人。因而，作为优质品种的北京鸭，成为世界名贵鸭种来源已久',
  });
 
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Ka extends Component {
  render() {
    return (
        <List
        itemLayout="vertical"
        size="large"
        // pagination={{
        //   onChange: page => {
        //     // console.log(page);
        //   },
        //   pageSize: 3,
        // }}
        dataSource={listData}
        footer={
          <div>
            <b>历史缘由</b>
            <p>明初年间，老百姓爱吃南京板鸭，皇帝也爱吃，据说明太祖朱元璋就“日食烤鸭一只”。宫廷里的御厨们就想方设法研制鸭馔的新吃法来讨好万岁爷，于是也就研制出了叉烧烤鸭和焖炉烤鸭这两种。叉烧烤鸭以“全聚德”为代表，而焖炉烤鸭则以“便宜坊”最著名。金陵烤鸭是选用肥大的草鸭为原料，净重要求在2．5公斤左右。据说，随着明成祖（即朱棣）篡位迁都北京后，也顺便带走了不少南京里烤鸭的高手。在嘉靖年间，烤鸭就从宫廷传到了民间，老“便宜坊”烤鸭店就在菜市口米市胡同挂牌开业，这也是北京第一家烤鸭店。而当时的名称则叫“金陵片皮鸭”，就在老“便宜坊”的市幌上还特别标有一行小字：金陵烤鸭。
在1864年，京城名气最大的“全聚德”烤鸭店也挂牌开业，烤鸭技术又发展到了“挂炉”时代。它是用果木明火烤制并具有特殊的清香味道，不仅使烤鸭香飘万里而且还使得“北京烤鸭”取代了“南京烤鸭”，而“金陵片皮鸭”只能在港澳、深圳、广州等南方几个大城市的菜单上才能见到。</p>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="./烤鸭.jpg"
              />
            }
            
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}
