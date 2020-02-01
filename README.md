## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true|
|email|string|null:false,unique:true|
|nickname|string|null:false,unique:true|
|password|string|null:false|
# アソシエーション
- has_many:messages
- has_many:groups, through: :user_groups
- has_many:user_groups


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integr|null:false|
|group_id|integer|null:false|
# アソシエーション
- belongs_to :user
- belongs_to :group


## groupsテーブル

|Column|Type|Options|
|------|----|-------| 
|name|string|null:false|
# アソシエーション
- has_many :users, through: :user_groups
- has_many :user_groups
- has_many :messages


## user_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false|
|group_id|integer|null:false|
# アソシエーション
- belongs_to :user
- belongs_to :group
