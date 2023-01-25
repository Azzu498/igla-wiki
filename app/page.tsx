import React from 'react';
import GalleryItemTile from "./galleryItemTile";
import Bossfight from "../public/bossfight.png";
import RareLootimg from "../public/Loot.png";
import EnchantingImg from "../public/Enchanting.png";
import MapsImg from "../public/maps.png";
import CustomBossessImg from "../public/customBossSpawns.png";
import HuntingTasksImg from "../public/hunting.png";
import ItemsReforgingImg from "../public/itemsReforging.png";
import CustomQuestsImg from "../public/customQuests.png";

function Home() {
    return (

          <div className= 'w-screen !pt-0 '>
              <div className='sm:mx-10 h-full '>
                  <div className="container w-screen sm:w-full ">
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-2">
                          <div className="flex justify-center rounded-2xl w-full">
                              <GalleryItemTile
                                  imgSource={Bossfight}
                                  redirectUrl='/boss-hunting'
                                  descriptionTitle='Boss Hunting System'
                                  descriptionBody1='Kill bossess daily'
                                  descriptionBody2='and earn boss points!'
                              />
                          </div>
                          <div className="flex justify-center rounded-2xl w-full">
                              <GalleryItemTile
                                  imgSource={RareLootimg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Rare Loot'
                                  descriptionBody1='Check out our unique'
                                  descriptionBody2='and rare loot!'
                              />
                          </div>
                          <div className="flex justify-center rounded-2xl w-full">
                              <GalleryItemTile
                                  imgSource={EnchantingImg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Enchanting System'
                                  descriptionBody1='Check out fully custom'
                                  descriptionBody2='enchanting system!'
                              />
                          </div>
                          <div className="flex justify-center text-6xl rounded-2xl p-6 w-full">
                              <GalleryItemTile
                                  imgSource={MapsImg}
                                  redirectUrl='/boss-hunting'
                                  descriptionTitle='Custom Maps'
                                  descriptionBody1='Visit our custom maps'
                                  descriptionBody2='and explore new hunting places!'
                              />
                          </div>
                          <div className="flex justify-center text-6xl rounded-2xl p-6 w-full">
                              <GalleryItemTile
                                  imgSource={CustomBossessImg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Custom Boss Spawn'
                                  descriptionBody1='Kill Daily Bossess'
                                  descriptionBody2='and earn great loot to boost your progression!'
                              />

                          </div>
                          <div className="flex justify-center text-6xl rounded-2xl p-6 w-full">
                              <GalleryItemTile
                                  imgSource={HuntingTasksImg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Hunting Tasks'
                                  descriptionBody1='Select prefered task'
                                  descriptionBody2='and kill monsters for great rewards!'
                              />
                          </div>
                          <div className="flex justify-center text-6xl rounded-2xl p-6 w-full">
                              <GalleryItemTile
                                  imgSource={ItemsReforgingImg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Reforging System'
                                  descriptionBody1='Reforge your items'
                                  descriptionBody2='and trade the dust into even better equipment!'
                              />
                          </div>
                          <div className="flex justify-center text-6xl rounded-2xl p-6 w-full">
                              <GalleryItemTile
                                  imgSource={CustomQuestsImg}
                                  redirectUrl='/boss-fight'
                                  descriptionTitle='Custom Quests!'
                                  descriptionBody1='Pick up the challenge'
                                  descriptionBody2='and complete the quests for great equipment!'
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>


    );
}

export default Home;