# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying Everything"
User.destroy_all
Listing.destroy_all
Event.destroy_all
Post.destroy_all
Comment.destroy_all

puts "----Creating Users----"
#User.create(username: 'kingofkings', password: 'MineNotYours')
mike = User.create(username: 'kingofkings', password: 'Mike123')
jared = User.create(username: 'basetankgod', password: 'Jared123')
larry = User.create(username: 'thabigslo', password: 'Larry123')
ovan = User.create(username: 'onemagic19', password: 'Ovan123')
rod = User.create(username: 'roddygeez', password: 'Rod123')

puts "----Create Listings----"
# Listing.create(creator: ,address:'', description:'', price:'', bedroom:'', bath:'')
mt_vernon_1 = Listing.create(creator: jared, address:'167 Clove Road, Mount Vernon, NY, 10550', description:'With some of the nations most prestigious neigherboring private schools and right outside NYC.', price:'853,000', bedroom:4, bath:3)

puts "----Create Events----"
# Event.create(host: ,text:'', date:'', media:'')
nyc_event = Event.create(host: ovan, text:'NYC Real Estate Networking (Commercial & Residential) - 3rd Tuesday Morning', date:'29-10-2022', media:'http://www.centurynyceb5.com/siteberdev/wp-content/uploads/2018/06/669598864244571586.jpg')

puts "----Create Posts----"
# Post.create(author: ,text:'', media:'', reaction:'')
first_home = Post.create(author: mike, text:'After a long year of searching my wife and I finally secured the home we\'ve been looking for!', media:'https://cdn-1.eneighborhoods.com/x2/@v=-513556722@/78091/8/872/M00000490-H5066872/M00000490-H5066872_1.jpg', reaction:2)

puts "----Create Comments----"
# Comment.create(com_creator: ,text:'', media:'', reaction:'')
first_post = Comment.create( com_creator: larry, post: first_home, text:'I\'m so happy for you and congradulations!', media:'', reaction:4)

puts "----COMPLETE----"
