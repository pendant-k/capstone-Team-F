import torch
import numpy as np
import models
import cv2

def get_keywords_and_models(path='./',num_models=4):
    keywords_list=[]
    models_list=[]

    for n in range(num_models):
        # get keywords
        keywords_path=path+f'categories{n+1}.txt'

        with open(keywords_path,'r') as f:
            keywords=f.readlines()

        keywords=list(map(lambda s:s.rstrip(),keywords))
        keywords_list.append(keywords)

        # get models
        pretrained_path=path+f'model_params{n+1}.pt'

        model=models.resnet34()
        model.load_state_dict(torch.load(pretrained_path,'cpu'))
        models_list.append(model)

    return keywords_list,models_list

def preprocess(user_image):
    image=cv2.resize(user_image,dsize=(32,32))
    image=np.array(image)
    image=image.reshape(1,1,32,32)
    image=image.astype('float32')/255.0
    image=torch.from_numpy(image)

    return image

def accuracy_for_keyword(keyword,user_image,keywords_list,models_list):
    model_idx=0
    key_idx=0

    for i,keywords in enumerate(keywords_list):
        if keyword in keywords:
            model_idx=i
            key_idx=keywords.index(keyword)
            break

    model=models_list[model_idx]
    model.eval()

    x=preprocess(user_image)
    y=model(x)

    y=y.detach().numpy()

    print(y.shape)
    print(y[0])

    exp_y=np.exp(y[0])
    exp_usr=exp_y[key_idx]
    acc=exp_usr/np.sum(exp_y)*100

    return acc


